import '../styles/components/FilterInput.scss';
import { forwardRef } from 'react';

interface FilterInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id: string;
}

const FilterInput = forwardRef<HTMLInputElement, FilterInputProps>(
  ({ placeholder, value, onChange, name, id, ...props }, ref) => {
    return (
      <div className="filterInput-wrapper">
        <input
          ref={ref}
          className="filterInput"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          id={id}
          data-testid={`filter-input-${id}`}
          aria-label={placeholder}
          {...props}
        />
      </div>
    );
  },
);

FilterInput.displayName = 'FilterInput';
export default FilterInput;
