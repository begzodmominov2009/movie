import { GenerType } from "@/types/GenerTypes";

export async function getGener(): Promise<GenerType[]> {
  const res = await fetch(
    "https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/genre",
    {
      next: { revalidate: 300 },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch movies");

  return res.json();
}
