import { z } from "zod";
import { category, Expense } from "./category";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
interface Props {
  onSubmit: (data: Expense) => void;
}
const expenseSchema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be atleast 3 character." })
    .max(333),
  category: z.enum(category),
  price: z
    .number()
    .min(0.01, { message: "Price must be atleast 0.01" })
    .max(100_000),
});
type ExpenseF = z.infer<typeof expenseSchema>;
const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseF>({ resolver: zodResolver(expenseSchema) });
  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Descriptiom
        </label>
        <input
          {...register("description")}
          type="text"
          id="description"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          {...register("price", { valueAsNumber: true })}
          type="number"
          id="price"
          className="form-control"
        />
        {errors.price && <p className="text-danger">{errors.price.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Descriptiom
        </label>
        <select className="form-select" {...register("category")}>
          <option value="">Select Category</option>
          {category.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
