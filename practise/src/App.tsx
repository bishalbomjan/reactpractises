import { useState } from "react";
import ExpenseForm from "./expense/ExpenseForm";
import ExpenseFilter from "./expense/ExpenseFilter";
import ExpenseList from "./expense/ExpenseList";

const App = () => {
  const [filter, setFilter] = useState("");
  const expenses = [
    { id: 1, description: "Milk", category: "Grocery", price: 400 },
    { id: 2, description: "cloth", category: "Luxary", price: 400 },
  ];
  const display = filter
    ? expenses.filter((item) => item.category === filter)
    : expenses;
  return (
    <div>
      <ExpenseForm />
      <div className="mt-3">
        <ExpenseFilter onSelect={(item) => setFilter(item)} />
      </div>
      <ExpenseList expenses={display} />
    </div>
  );
};

export default App;
