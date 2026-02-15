"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white p-6">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-red-400 font-semibold">Xatolik bo‘ldi</div>
        <div className="text-white/60 text-sm mt-2">{error.message}</div>

        <button
          onClick={() => reset()}
          className="mt-4 inline-flex rounded-xl bg-white text-black px-4 py-2 font-semibold"
        >
          Qayta urinib ko‘rish
        </button>
      </div>
    </div>
  );
}
