import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ExpenseList from "./ExpenseList";
import { useState, useEffect } from "react";
import ExpenseFilter from "./ExpenseFilter";
import { category, Expense } from "./category";

const schema = z.object({
  description: z.string().min(3, { message: "Description is required" }),
  amount: z.number().min(0.01, { message: "Amount is required." }),
  category: z.enum(category),
});

type FormData = z.infer<typeof schema>;

const ExpenseTracking = () => {
  const [expense, setExpense] = useState<Expense[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [update, setUpdate] = useState<Expense | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // When update changes, pre-fill the form
  useEffect(() => {
    if (update) {
      reset({
        description: update.description,
        amount: update.amount,
        category: update.category,
      });
    }
  }, [update, reset]);

  const onSubmit = (data: FormData) => {
    if (update) {
      // Update existing
      setExpense((prev) =>
        prev.map((item) =>
          item.id === update.id ? { ...item, ...data } : item
        )
      );
      setUpdate(null); // clear editing mode
      reset(); // clear form
    } else {
      // Add new
      setExpense((prev) => [{ id: prev.length + 1, ...data }, ...prev]);
      reset(); // clear form
    }
  };

  const visibleExpense = selectedCategory
    ? expense.filter((item) => item.category === selectedCategory)
    : expense;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="des" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            type="text"
            id="des"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="amt" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            type="number"
            id="amt"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>

        <div className="mb-3">
          <select {...register("category")} className="form-select" id="cat">
            <option value="">Select Category</option>
            {category.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          {update ? "Update" : "Submit"}
        </button>
      </form>

      <div className="mt-3">
        <ExpenseFilter handleFilter={(filter) => setSelectedCategory(filter)} />
      </div>

      <ExpenseList
        expense={visibleExpense}
        handleUpdate={(id) =>
          setUpdate(expense.find((item) => item.id === id) || null)
        }
        handleDelete={(id) =>
          setExpense(expense.filter((item) => item.id !== id))
        }
      />
    </div>
  );
};

export default ExpenseTracking;
