import '../styles/components/FilterInput.scss';

interface props {
  placeholder: string;
}

const FilterInput = ({ placeholder }: props) => {
  return <input className="filterInput" placeholder={placeholder} />;
};

export default FilterInput;
