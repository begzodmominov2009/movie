export async function getMovies() {
  const res = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}
