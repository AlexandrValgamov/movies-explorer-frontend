import "./Movies.css";
import PropTypes from 'prop-types';
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function Movies({ cards }) {

  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList
        cards={cards}
      />
    </main>
  )
}

Movies.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
    })
  ),
};
