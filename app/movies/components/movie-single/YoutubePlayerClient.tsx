"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";

function normalizeUrl(raw: string) {
  const u = raw.trim();
  if (!/^https?:\/\//i.test(u)) return `https://${u}`;
  return u;
}

function getYoutubeId(raw?: string | null) {
  if (!raw) return null;
  const url = normalizeUrl(raw);

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      return parsed.pathname.split("/").filter(Boolean)[0] || null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      const v = parsed.searchParams.get("v");
      if (v) return v;

      const parts = parsed.pathname.split("/").filter(Boolean);
      // /embed/ID, /shorts/ID, /live/ID
      if (["embed", "shorts", "live"].includes(parts[0]) && parts[1])
        return parts[1];
    }

    return null;
  } catch {
    return null;
  }
}

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

type Props = {
  url: string;
  title: string;
  className?: string;
};

export default function YoutubePlayerClient({
  url,
  title,
  className = "",
}: Props) {
  const videoId = useMemo(() => getYoutubeId(url), [url]);

  const playerRef = useRef<any>(null);
  const mountRef = useRef<HTMLDivElement | null>(null);

  const rafRef = useRef<number | null>(null);

  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(80);

  // Load YT API once
  useEffect(() => {
    if (!videoId) return;

    const load = () =>
      new Promise<void>((resolve) => {
        if (window.YT?.Player) return resolve();

        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);

        window.onYouTubeIframeAPIReady = () => resolve();
      });

    let cancelled = false;

    load().then(() => {
      if (cancelled) return;
      if (!mountRef.current) return;

      // create player
      playerRef.current = new window.YT.Player(mountRef.current, {
        videoId,
        playerVars: {
          // ✅ YouTube control bar yo‘q
          controls: 0,
          // ✅ boshida title/related minimal
          rel: 0,
          modestbranding: 1,
          fs: 1,
          iv_load_policy: 3,
          playsinline: 1,
          // UI overlayni kamaytirish
          disablekb: 1,
        },
        events: {
          onReady: () => {
            setReady(true);
            const d = playerRef.current?.getDuration?.() || 0;
            setDuration(d);
            // initial volume
            playerRef.current?.setVolume?.(volume);
          },
          onStateChange: (e: any) => {
            const st = e.data; // -1,0,1,2...
            setPlaying(st === 1);
          },
        },
      });
    });

    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      try {
        playerRef.current?.destroy?.();
      } catch {}
      playerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  // Poll current time while playing
  useEffect(() => {
    const tick = () => {
      const p = playerRef.current;
      if (p?.getCurrentTime) setCurrent(p.getCurrentTime());
      rafRef.current = requestAnimationFrame(tick);
    };

    if (playing) rafRef.current = requestAnimationFrame(tick);
    else if (rafRef.current) cancelAnimationFrame(rafRef.current);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [playing]);

  const fmt = (s: number) => {
    if (!s || s < 0) return "0:00";
    const m = Math.floor(s / 60);
    const ss = Math.floor(s % 60);
    return `${m}:${ss.toString().padStart(2, "0")}`;
  };

  const togglePlay = () => {
    const p = playerRef.current;
    if (!p) return;
    if (playing) p.pauseVideo();
    else p.playVideo();
  };

  const onSeek = (value: number) => {
    const p = playerRef.current;
    if (!p || !duration) return;
    const t = (value / 100) * duration;
    p.seekTo(t, true);
    setCurrent(t);
  };

  const toggleMute = () => {
    const p = playerRef.current;
    if (!p) return;

    if (muted) {
      p.unMute();
      setMuted(false);
    } else {
      p.mute();
      setMuted(true);
    }
  };

  const onVolume = (v: number) => {
    const p = playerRef.current;
    setVolume(v);
    if (!p?.setVolume) return;
    p.setVolume(v);
    if (v === 0) {
      p.mute();
      setMuted(true);
    } else {
      p.unMute();
      setMuted(false);
    }
  };

  if (!videoId) {
    return (
      <div className="w-full h-[240px] md:h-[380px] grid place-items-center bg-black/40 text-white/60 rounded-2xl">
        Video URL noto‘g‘ri (YouTube ID topilmadi)
      </div>
    );
  }

  return (
    <div
      className={[
        "relative w-full bg-black rounded-2xl overflow-hidden",
        className,
      ].join(" ")}
    >
      {/* player area */}
      <div className="w-full aspect-video">
        <div ref={mountRef} className="w-full h-full" />
      </div>

      {/* custom controls */}
      <div className="absolute left-0 right-0 bottom-0 p-3 bg-gradient-to-t from-black/75 via-black/35 to-transparent">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={togglePlay}
            disabled={!ready}
            className={[
              "h-10 w-10 rounded-full grid place-items-center",
              "bg-white/10 border border-white/15 hover:bg-white/15 transition",
              !ready ? "opacity-50 cursor-not-allowed" : "",
            ].join(" ")}
            aria-label={playing ? "Pause" : "Play"}
            title={playing ? "Pause" : "Play"}
          >
            {playing ? <FaPause /> : <FaPlay className="ml-[1px]" />}
          </button>

          <div className="text-xs text-white/75 w-[90px] shrink-0">
            {fmt(current)} / {fmt(duration)}
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={duration ? (current / duration) * 100 : 0}
            onChange={(e) => onSeek(Number(e.target.value))}
            className="w-full accent-white"
            disabled={!ready || !duration}
          />

          <button
            type="button"
            onClick={toggleMute}
            disabled={!ready}
            className={[
              "h-10 w-10 rounded-full grid place-items-center",
              "bg-white/10 border border-white/15 hover:bg-white/15 transition",
              !ready ? "opacity-50 cursor-not-allowed" : "",
            ].join(" ")}
            aria-label={muted ? "Unmute" : "Mute"}
            title={muted ? "Unmute" : "Mute"}
          >
            {muted || volume === 0 ? <HiVolumeOff /> : <HiVolumeUp />}
          </button>

          <input
            type="range"
            min={0}
            max={100}
            value={muted ? 0 : volume}
            onChange={(e) => onVolume(Number(e.target.value))}
            className="w-[120px] accent-white"
            disabled={!ready}
          />
        </div>
      </div>

      {/* title badge (optional) */}
      <div className="absolute top-3 left-3 rounded-xl bg-black/45 border border-white/10 px-3 py-2 text-xs text-white/80">
        {title}
      </div>
    </div>
  );
}
