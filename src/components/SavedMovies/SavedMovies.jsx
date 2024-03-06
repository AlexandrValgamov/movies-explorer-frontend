import PropTypes from 'prop-types';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import cardsData from "../../utils/savedMoviesData.json"; // временные данные

export default function SavedMovies() {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList
        cards={cardsData}
      />
    </section>
  )
}

SavedMovies.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
    })
  ),
};
