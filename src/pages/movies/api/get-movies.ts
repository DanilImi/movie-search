export const getMovies = async () => {
  try {
    const response = await fetch("/api/get-movies");
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.error(error);
    return [];
  }
};
