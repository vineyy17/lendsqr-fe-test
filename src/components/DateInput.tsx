import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/components/DateInput.scss';
import dateIcon from '../assets/icons/date.svg';

interface DateInputProps {
  placeholder: string;
}

const DateInput: React.FC<DateInputProps> = ({ placeholder }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setIsDatePickerOpen(false);
  };

  return (
    <div className="filterDate">
      <input
        className="filterDate__input"
        placeholder={placeholder}
        value={
          selectedDate
            ? selectedDate.toLocaleDateString('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              })
            : ''
        }
        readOnly
        onClick={toggleDatePicker} // Open date picker when input is clicked
      />
      <img
        src={dateIcon}
        className="filterDate__icon"
        alt="date icon"
        onClick={toggleDatePicker} // Toggle date picker on icon click
      />
      {isDatePickerOpen && (
        <div className="filterDate__pickerWrapper">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            className="filterDate__datePicker"
            popperPlacement="bottom-start"
            dateFormat="MMM dd, yyyy"
          />
        </div>
      )}
    </div>
  );
};

export default DateInput;
