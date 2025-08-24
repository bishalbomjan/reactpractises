import React from "react";
import { category } from "./category";
interface Props {
  onSelect: (categroy: string) => void;
}
const ExpenseFilter = ({ onSelect }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => {
        onSelect(e.target.value);
        console.log(e.target.value);
      }}
    >
      <option value="">Select Category</option>
      {category.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
