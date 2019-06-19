import React from "react";
import Field from "./Field";
import useForm from "./useForm";

const Form4 = () => {
  const initialValues = {
    firstName: "John",
    lastName: "Doe"
  };
  const { values, handleChange, handleSubmit } = useForm(initialValues);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <fieldset className="fieldset">
        <legend className="legend">Form with re-usable fields and Hooks</legend>
        <Field
          value={values.firstName}
          name="firstName"
          label="First Name"
          onChange={handleChange}
        />

        <Field
          value={values.lastName}
          name="lastName"
          label="Last Name"
          onChange={handleChange}
        />

        <button type="submit" className="button">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default Form4;
