import { category } from "./category";
interface Props {
  handleFilter: (filter: string) => void;
}
const ExpenseFilter = ({ handleFilter }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => {
        handleFilter(e.target.value);
      }}
    >
      <option value="">All Category</option>
      {category.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
