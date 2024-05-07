import { Genre } from "../../../shared/type/type";

export const getGenres = async () => {
  try {
    const response = await fetch("/api/get-genres");
    const genres: Genre[] = await response.json();
    return genres;
  } catch (error) {
    console.error(error);
    return [];
  }
};
