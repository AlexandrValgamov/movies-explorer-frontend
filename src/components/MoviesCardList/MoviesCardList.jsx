import './MoviesCardList.css';
import PropTypes from 'prop-types';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({
  movies,
  onCardLike,
  onCardDislike,
  savedMovies,
}) {
  return (
    <section className="cards">
      <div className="cards__gallary" aria-label="Галерея">
        {movies &&
          movies.map((movie) => (
            <MoviesCard
              key={movie.id || movie.movieId}
              card={movie}
              onCardLike={onCardLike}
              onCardDislike={onCardDislike}
              savedMovies={savedMovies}
            />
          ))}
      </div>
    </section>
  );
}

MoviesCardList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      movieId: PropTypes.number,
      country: PropTypes.string,
      director: PropTypes.string,
      duration: PropTypes.number,
      year: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          url: PropTypes.string,
          formats: PropTypes.shape({
            thumbnail: PropTypes.shape({
              url: PropTypes.string,
            }),
          }),
        }),
      ]),
      trailerLink: PropTypes.string,
      nameRU: PropTypes.string,
      nameEN: PropTypes.string,
    }),
  ),
  onCardLike: PropTypes.func,
  onCardDislike: PropTypes.func,
  savedMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};

MoviesCardList.defaultProps = {
  onCardLike: null,
};
