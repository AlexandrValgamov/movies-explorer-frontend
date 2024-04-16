import PropTypes from 'prop-types';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { useEffect, useState } from 'react';
import { filterShortMovies } from '../../utils/utils';
import { SEARCH_NOT_FOUND } from '../../utils/errorMessages';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function SavedMovies({ movies, onCardDislike }) {
  const { values, handleChange, isValid } = useFormWithValidation();
  const [isFilter, setIsFilter] = useState(false);
  const [error, setError] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showMovies, setShowMovies] = useState(movies);

  const handleSearchSavedMovie = (searchQuery) => {
    const searchSavedMovies = movies.filter((movie) => {
      const lowercasedQuery = searchQuery.toLowerCase();
      return (
        (movie.nameRU &&
          movie.nameRU.toLowerCase().includes(lowercasedQuery)) ||
        (movie.nameEN && movie.nameEN.toLowerCase().includes(lowercasedQuery))
      );
    });
    setShowMovies(searchSavedMovies);
    const filtered = filterShortMovies(searchSavedMovies);
    setFilteredMovies(filtered);
    if (searchSavedMovies.length === 0) {
      setError(SEARCH_NOT_FOUND);
    }
  };

  useEffect(() => {
    const currentMovies = isFilter ? filteredMovies : showMovies;
    if (currentMovies.length === 0) {
      setError(SEARCH_NOT_FOUND);
    } else {
      setError('');
    }
  }, [isFilter, filteredMovies, showMovies]);

  useEffect(() => {
    if (!values.search) {
      setShowMovies(movies);
      setError('');
    }
  }, [values.search]);

  useEffect(() => {
    setShowMovies(movies);
    if (isValid) {
      handleSearchSavedMovie(values.search);
    } else {
      const filtered = filterShortMovies(movies);
      setFilteredMovies(filtered);
      if (isFilter && filtered.length === 0) {
        setError(SEARCH_NOT_FOUND);
      }
    }
  }, [movies]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      setError('Нужно ввести ключевое слово для поиска.');
      return;
    }
    handleSearchSavedMovie(values.search);
  };

  const handleChangeFilter = (e) => {
    setIsFilter(e.target.checked);
  };

  return (
    <section className="saved-movies">
      <SearchForm
        values={values}
        onSubmit={onSubmit}
        onChange={handleChange}
        isFilter={isFilter}
        handleChangeFilter={handleChangeFilter}
      />
      {error && <ErrorMessage message={error} />}
      {!error && (
        <MoviesCardList
          movies={isFilter ? filteredMovies : showMovies}
          onCardDislike={onCardDislike}
        />
      )}
    </section>
  );
}

SavedMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      nameRU: PropTypes.string,
      nameEN: PropTypes.string,
    }),
  ),
  onCardDislike: PropTypes.func.isRequired,
  isSuccess: PropTypes.bool,
};
