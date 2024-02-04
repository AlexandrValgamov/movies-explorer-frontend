import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <div className="filter">
      <label className="filter__switch">
        <input type="checkbox" className="filter__checkbox" />
        <span className="filter__slider"></span>
      </label>
      <span className="filter__toggle-label">Короткометражки</span>
    </div>
  );
};

export default FilterCheckbox;