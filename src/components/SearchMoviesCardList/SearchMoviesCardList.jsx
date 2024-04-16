import './SearchMoviesCardList.css';
import PropTypes from 'prop-types';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import {
  CARDS_COUNT_LARGE,
  CARDS_COUNT_MEDIUM,
  CARDS_COUNT_SMALL,
  INCREMENT_LARGE,
  INCREMENT_SMALL,
  RESIZE_THRESHOLD_LARGE,
  RESIZE_THRESHOLD_SMALL,
} from '../../utils/constants';

export default function SearchMoviesCardList({
  movies,
  onCardLike,
  onCardDislike,
  savedMovies,
}) {
  const [cardsCount, setCardsCount] = useState(CARDS_COUNT_LARGE);
  const [increment, setIncrement] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < RESIZE_THRESHOLD_SMALL) {
        setCardsCount(CARDS_COUNT_SMALL);
        setIncrement(INCREMENT_SMALL);
      } else if (window.innerWidth >= RESIZE_THRESHOLD_LARGE) {
        setCardsCount(CARDS_COUNT_LARGE);
        setIncrement(INCREMENT_LARGE);
      } else {
        setCardsCount(CARDS_COUNT_MEDIUM);
        setIncrement(INCREMENT_SMALL);
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
