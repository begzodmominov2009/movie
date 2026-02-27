const LIKE_KEY = "liked_movies";

export const getLikes = (): string[] => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(LIKE_KEY) || "[]");
};

const notify = () => {
  window.dispatchEvent(new Event("likeUpdated"));
};

export const isLiked = (id: string) => {
  const likes = getLikes();
  return likes.includes(id);
};

export const addToLike = (id: string) => {
  const likes = getLikes();
  if (!likes.includes(id)) {
    localStorage.setItem(LIKE_KEY, JSON.stringify([...likes, id]));
    notify()
  }
};

export const removeLike = (id: string) => {
  const likes = getLikes();
  localStorage.setItem(
    LIKE_KEY,
    JSON.stringify(likes.filter((item) => item !== id)),
  );
  notify()
};
