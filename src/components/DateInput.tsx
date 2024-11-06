import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/components/DateInput.scss';
import dateIcon from '../assets/icons/date.svg';

interface DateInputProps {
  placeholder: string;
  selectedDate: Date | null | undefined;
  onChange: (date: Date | null) => void;
  name?: string;
}

const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  ({ placeholder, selectedDate, onChange, name }, ref) => {
    const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);

    const toggleDatePicker = () => {
      setIsDatePickerOpen(!isDatePickerOpen);
    };

    const handleDateChange = (date: Date | null) => {
      onChange(date);
      setIsDatePickerOpen(false);
    };

    return (
      <div className="filterDate">
        <input
          ref={ref}
          className="filterDate__input"
          placeholder={placeholder}
          value={
            selectedDate
              ? selectedDate.toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric',
                })
              : ''
          }
          readOnly
          onClick={toggleDatePicker}
          name={name}
          data-testid={`filter-date-${name}`}
          aria-label={placeholder}
        />
        <img
          src={dateIcon}
          className="filterDate__icon"
          alt="date icon"
          onClick={toggleDatePicker}
          data-testid="date-picker-toggle"
        />
        {isDatePickerOpen && (
          <div
            className="filterDate__pickerWrapper"
            data-testid="date-picker-wrapper"
          >
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
              className="filterDate__datePicker"
              popperPlacement="bottom-start"
              dateFormat="EEE, MMM dd, yyyy"
              data-testid="date-picker"
            />
          </div>
        )}
      </div>
    );
  },
);

DateInput.displayName = 'DateInput';
export default DateInput;
