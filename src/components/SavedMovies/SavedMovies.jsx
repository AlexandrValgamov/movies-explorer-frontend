import PropTypes from 'prop-types';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import cardsData from '../../utils/savedMoviesData.json'; // временные данные
import Preloader from '../Preloader/Preloader';

export default function SavedMovies() {
  const isLoading = false;
  return (
    <section className="saved-movies">
      <SearchForm />
      {isLoading && <Preloader />}
      <MoviesCardList cards={cardsData} />
    </section>
  );
}

SavedMovies.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
    }),
  ),
};
