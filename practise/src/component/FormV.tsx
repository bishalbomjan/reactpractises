import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod Schema
const schema = z.object({
  name: z
    .string({ required_error: "Name is required." })
    .min(3, { message: "Name can't be less than 3 characters." }),
  age: z.preprocess(
    (val) => (val === "" || Number.isNaN(val) ? undefined : val),
    z
      .number({ invalid_type_error: "Age field is required." })
      .min(18, { message: "Age must be at least 18." })
  ),
});

type FormData = z.infer<typeof schema>;

const FormV = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => console.log("✅ Submitted:", data))}
      >
        <div className="mb-3 form-label">
          <label htmlFor="name">Name</label>
          <input
            {...register("name")}
            className="form-control"
            id="name"
            type="text"
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>

        <div className="mb-3 form-label">
          <label htmlFor="age">Age</label>
          <input
            {...register("age", { valueAsNumber: true })}
            className="form-control"
            id="age"
            type="number"
          />
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormV;
