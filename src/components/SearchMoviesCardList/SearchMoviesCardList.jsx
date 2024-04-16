import './SearchMoviesCardList.css';
import PropTypes from 'prop-types';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';

export default function SearchMoviesCardList({
  movies,
  onCardLike,
  onCardDislike,
  savedMovies,
}) {
  const [cardsCount, setCardsCount] = useState(16);
  const [increment, setIncrement] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 760) {
        setCardsCount(5);
        setIncrement(2);
      } else if (window.innerWidth >= 900) {
        setCardsCount(16);
        setIncrement(4);
      } else {
        setCardsCount(8);
        setIncrement(2);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMoreClick = () => {
    setCardsCount((prev) => prev + increment);
  };
  return (
    <div className="movies-list-wrapper">
      <MoviesCardList
        movies={movies.slice(0, cardsCount)}
        onCardLike={onCardLike}
        onCardDislike={onCardDislike}
        savedMovies={savedMovies}
      />
      {movies.length > cardsCount && (
        <button
          onClick={handleMoreClick}
          className="movies-list-wrapper__button"
        >
          Ещё
        </button>
      )}
    </div>
  );
}

SearchMoviesCardList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
  onCardLike: PropTypes.func,
  onCardDislike: PropTypes.func.isRequired,
  savedMovies: PropTypes.arrayOf(PropTypes.object),
};
