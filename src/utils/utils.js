export const filterShortMovies = (movies) => {
  return movies.filter((movie) => movie.duration <= 40);
};

export const checkIsLiked = (movies, id) => {
  return movies.some((savedMovie) => savedMovie.movieId === id);
}