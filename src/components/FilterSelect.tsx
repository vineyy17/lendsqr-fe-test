import arrow from '../assets/icons/selectArrow.svg';
import '../styles/components/FilterSelect.scss';
import { forwardRef } from 'react';

interface Option {
  value: string;
  label: string;
}

interface FilterSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: Option[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
}

const FilterSelect = forwardRef<HTMLSelectElement, FilterSelectProps>(
  ({ options = [], value = '', onChange, name, ...props }, ref) => {
    return (
      <div className="filterSelect">
        <select
          ref={ref}
          className="filterSelect__input"
          value={value}
          onChange={onChange}
          name={name}
          data-testid={`filter-select-${name}`}
          aria-label={name}
          {...props}
        >
          <option value="" disabled>
            Select
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <img src={arrow} alt="arrow icon" className="filterSelect__icon" />
      </div>
    );
  },
);

FilterSelect.displayName = 'FilterSelect';
export default FilterSelect;
