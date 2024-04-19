import './Movies.css';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { useEffect, useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {
  EMPTY_SEARCH_ERROR,
  SEARCH_NOT_FOUND,
} from '../../utils/errorMessages';
import { filterShortMovies } from '../../utils/utils';
import SearchMoviesCardList from '../SearchMoviesCardList/SearchMoviesCardList';
import { SEARCH_DATA_KEY } from '../../utils/constants';

export default function Movies({
  handleSearchMovie,
  movies,
  savedMovies,
  setMovies,
  isLoading,
  onCardLike,
  onCardDislike,
}) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const [isFilter, setIsFilter] = useState(false);
  const [error, setError] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const savedSearchData = localStorage.getItem(SEARCH_DATA_KEY);
    if (savedSearchData) {
      const { searchQuery, isFilter, searchedMovies } =
        JSON.parse(savedSearchData);
      setIsFilter(isFilter);
      setMovies(searchedMovies);
      resetForm({ search: searchQuery });
    }
  }, []);

  useEffect(() => {
    const filtered = filterShortMovies(movies);
    setFilteredMovies(filtered);
    if (isFilter && filtered.length === 0) {
      setError(SEARCH_NOT_FOUND);
    }
    if (!isFilter && movies.length > 0) {
      setError('');
    }
  }, [isFilter, movies]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!values.search) {
      setError(EMPTY_SEARCH_ERROR);
      return;
    }
    setError('');
    handleSearchMovie(values.search, isFilter, setError);
  };

  const handleChangeFilter = (e) => {
    setIsFilter(e.target.checked);
    handleSearchMovie(values.search, e.target.checked, setError);
  };

  return (
    <main className="movies">
      <SearchForm
        values={values}
        errors={errors}
        isValid={isValid}
        onSubmit={onSubmit}
        onReset={resetForm}
        isLoading={isLoading}
        onChange={handleChange}
        isFilter={isFilter}
        handleChangeFilter={handleChangeFilter}
      />
      {isLoading && <Preloader />}
      {!isLoading && error && <ErrorMessage message={error} />}
      {!isLoading && !error && (
        <SearchMoviesCardList
          movies={isFilter ? filteredMovies : movies}
          onCardLike={onCardLike}
          onCardDislike={onCardDislike}
          savedMovies={savedMovies}
        />
      )}
    </main>
  );
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
    }),
  ),
  handleSearchMovie: PropTypes.func,
  savedMovies: PropTypes.arrayOf(PropTypes.object),
  setMovies: PropTypes.func,
  isLoading: PropTypes.bool,
  onCardLike: PropTypes.func,
  onCardDislike: PropTypes.func,
};
