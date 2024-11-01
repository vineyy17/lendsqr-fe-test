import filter from '../assets/icons/table-filter.svg';
import '../styles/components/FilterUsers.scss';
import { Popover } from '@radix-ui/themes';

const FilterUsers = () => {
  return (
    <div className="filterUsers">
      <Popover.Root>
        <Popover.Trigger>
          <img className="filterUsers__icon" src={filter} alt="filter" />
        </Popover.Trigger>
        <Popover.Content>
          <div className="filterUsers__box">
            <p>Popover</p>
          </div>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
};

export default FilterUsers;
