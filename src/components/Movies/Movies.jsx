import './Movies.css';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

export default function Movies({ cards }) {
  const isLoading = false;
  return (
    <main className="movies">
      <SearchForm />
      {isLoading && <Preloader />}
      <MoviesCardList cards={cards} />
    </main>
  );
}

Movies.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
    }),
  ),
};
