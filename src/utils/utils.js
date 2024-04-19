import { SEARCH_DATA_KEY } from "./constants";

export const filterShortMovies = (movies) => {
  return movies.filter((movie) => movie.duration <= 40);
};

export const checkIsLiked = (movies, id) => {
  return movies.some((savedMovie) => savedMovie.movieId === id);
}

export const saveToLocalStorage = (searchQuery, isFilter, searchedMovies) => {
  const searchData = {
    searchQuery,
    isFilter,
    searchedMovies,
  };
  localStorage.setItem(SEARCH_DATA_KEY, JSON.stringify(searchData));
}