import React from "react";
import Field from "./Field";
import FormHandler from "./FormHandler";

const Form3 = () => {
  const initialValues = {
    firstName: "John",
    lastName: "Doe"
  };

  return (
    <FormHandler initialValues={initialValues}>
      {({ values, handleChange, handleSubmit }) => (
        <form className="form" onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            <legend className="legend">
              Form with re-usable fields and render props pattern
            </legend>
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
      )}
    </FormHandler>
  );
};

export default Form3;
