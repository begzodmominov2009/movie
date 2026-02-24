import { CategoryType } from "@/types/CategoryTypes";

export async function getCategory(): Promise<CategoryType[]> {
  const res = await fetch(
    "https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/genre",
    {
      next: { revalidate: 300 },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch movies");

  return res.json();
}
