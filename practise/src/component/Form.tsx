import { useState } from "react";
import { useForm } from "react-hook-form";
// this is need to tell useForm state
//what is the type of form and also get suggesstion
// when we type errors.na name or age
interface FormInterface {
  name: string;
  age: number;
}
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInterface>();
  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });
  console.log(register("name"));
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
          {...register("name", { required: true, minLength: 3 })}
          type="text"
          id="name"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Name is required Field.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Name must be atleast 3 character.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        {/* for number we have to give valueAsNumber to true */}
        <input
          {...register("age", { required: true, valueAsNumber: true, min: 18 })}
          type="text"
          id="name"
          className="form-control"
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">Age is required Field.</p>
        )}
        {errors.age?.type === "min" && (
          <p className="text-danger">Age must be atleast 18.</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Sumbit
      </button>
    </form>
  );
};

export default Form;
