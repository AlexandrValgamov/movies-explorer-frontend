import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <form className="search-form">
      <div className="search-form__field">
        <input type="text" className="search-form__input" placeholder="Фильм" />
        <button type="submit" className="search-form__button">Найти</button>
      </div>
      <FilterCheckbox />
    </form>
  );
};

export default SearchForm;