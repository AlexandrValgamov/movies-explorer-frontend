import './FilterCheckbox.css';
import PropTypes from 'prop-types';

const FilterCheckbox = ({ isFilter, onChange }) => {
  return (
    <div className="filter">
      <label className="filter__switch">
        <input
          checked={isFilter}
          onChange={onChange}
          type="checkbox"
          className="filter__checkbox"
        />
        <span className="filter__slider"></span>
      </label>
      <span className="filter__toggle-label">Короткометражки</span>
    </div>
  );
};

export default FilterCheckbox;

FilterCheckbox.propTypes = {
  isFilter: PropTypes.bool,
  onChange: PropTypes.func,
};
