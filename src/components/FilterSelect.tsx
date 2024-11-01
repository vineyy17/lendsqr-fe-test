import arrow from '../assets/icons/selectArrow.svg';
import '../styles/components/FilterSelect.scss';

const FilterSelect = () => {
  return (
    <div className="filterSelect">
      <select className="filterSelect__input" defaultValue="">
        <option value="" disabled>
          Select
        </option>
        <option value="category1">Organization</option>
        <option value="category2">Organization</option>
        <option value="category3">Organization</option>
      </select>
      <img src={arrow} alt="arrow icon" className="filterSelect__icon" />
    </div>
  );
};

export default FilterSelect;
