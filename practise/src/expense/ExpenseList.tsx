import { Expense } from "./category";

interface Props {
  expenses: Expense[];
}
const ExpenseList = ({ expenses }: Props) => {
  return (
    <table className="table table-bordered mt-3">
      <thead>
        <tr>
          <th>SN</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.id}</td>
            <td>{expense.description}</td>
            <td>{expense.price}</td>
            <td>{expense.category}</td>
            <td>
              <button className="btn btn-outline-danger">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>total</th>
          <th>{}</th>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
