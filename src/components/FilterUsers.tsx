import filter from '../assets/icons/table-filter.svg';
import '../styles/components/FilterUsers.scss';
import { Popover } from '@radix-ui/themes';
import FilterSelect from './FilterSelect';
import FilterInput from './FilterInput';
import DateInput from './DateInput';

const FilterUsers = () => {
  return (
    <div className="filterUsers">
      <Popover.Root>
        <Popover.Trigger>
          <img className="filterUsers__icon" src={filter} alt="filter" />
        </Popover.Trigger>
        <Popover.Content>
          <div className="filterUsers__box">
            <div className="filterUsers__box__group">
              <label className="filterUsers__box__group__text">
                Organization
              </label>
              <FilterSelect />
            </div>
            <div className="filterUsers__box__group">
              <label className="filterUsers__box__group__text">Username</label>
              <FilterInput placeholder="User" />
            </div>
            <div className="filterUsers__box__group">
              <label className="filterUsers__box__group__text">Email</label>
              <FilterInput placeholder="Email" />
            </div>
            <div className="filterUsers__box__group">
              <label className="filterUsers__box__group__text">Date</label>
              <DateInput placeholder="Date" />
            </div>
            <div className="filterUsers__box__group">
              <label className="filterUsers__box__group__text">
                Phone Number
              </label>
              <FilterInput placeholder="Phone Number" />
            </div>
            <div className="filterUsers__box__group">
              <label className="filterUsers__box__group__text">Status</label>
              <FilterSelect />
            </div>
            <div className="filterUsers__box__flexWrapper">
              <button className="filterUsers__box__flexWrapper__resetButton">
                Reset
              </button>
              <button className="filterUsers__box__flexWrapper__filterButton">
                Filter
              </button>
            </div>
          </div>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
};

export default FilterUsers;
