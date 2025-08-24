import { Expense } from "./category";

interface Props {
  expense: Expense[];
  handleDelete: (id: number) => void;
  handleUpdate: (id: number) => void;
}
const ExpenseList = ({ expense, handleDelete, handleUpdate }: Props) => {
  if (expense.length === 0) return null;
  return (
    <div className="mt-3">
      <table className="table table-bordered table-striped">
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
          {expense.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button
                  className="btn btn-danger mr-2"
                  onClick={() => handleUpdate(item.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              $
              {expense
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
