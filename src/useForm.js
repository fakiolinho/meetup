import React from "react";

const useForm = (initialValues = {}) => {
  const [values, setValues] = React.useState(initialValues);

  const handleChange = e => {
    e.persist();
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  };

  return { values, handleChange, handleSubmit };
};

export default useForm;
