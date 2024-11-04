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
      <input
        ref={ref}
        className="filterInput"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        {...props}
      />
    );
  },
);

FilterInput.displayName = 'FilterInput';
export default FilterInput;
