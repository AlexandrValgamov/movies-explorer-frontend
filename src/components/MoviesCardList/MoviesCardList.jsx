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
    }),
  ),
  onCardLike: PropTypes.func,
  onCardDislike: PropTypes.func.isRequired,
  savedMovies: PropTypes.arrayOf(PropTypes.object),
};
