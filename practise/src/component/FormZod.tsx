import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  name: z.string().min(3, { message: "Name must be atleast 3 character." }),
  age: z
    .number({ invalid_type_error: "Age is required field" })
    .min(18, { message: "Age must be atleast 18." }),
});
type FormData = z.infer<typeof schema>;
const FormZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  //   register return bunch of properties of object
  // Like onBlur, name onChange,ref
  // so it work using refhook under the hood.

  return (
    <form
      // onSubmit also clean we don't have preventDefault.
      // It is implmented inder the hood
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* we can apply validation rule like */}
        <input
          {...register("name")}
          type="text"
          id="name"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        {/* for number we have to give valueAsNumber to true */}
        <input
          {...register("age")}
          type="text"
          id="name"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Sumbit
      </button>
    </form>
  );
};

export default FormZod;
