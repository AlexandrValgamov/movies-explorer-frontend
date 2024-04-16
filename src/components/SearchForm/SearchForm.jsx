import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import PropTypes from 'prop-types';
import './SearchForm.css';

export default function SearchForm({
  values,
  onSubmit,
  onChange,
  isFilter,
  handleChangeFilter,
}) {
  return (
    <form
      className="search-form"
      name="searchForm"
      onSubmit={onSubmit}
      noValidate
    >
      <div className="search-form__field">
        <input
          className="search-form__input"
          name="search"
          required
          onChange={onChange}
          value={values.search || ''}
          type="text"
          placeholder="Фильм"
        />
        <button type="submit" className="search-form__button">
          Найти
        </button>
      </div>
      <FilterCheckbox isFilter={isFilter} onChange={handleChangeFilter} />
    </form>
  );
}

SearchForm.propTypes = {
  values: PropTypes.object,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  isFilter: PropTypes.bool,
  handleChangeFilter: PropTypes.func,
};
