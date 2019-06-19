import React from "react";
import Field from "./Field";

export default class Form2 extends React.Component {
  state = {
    formValues: {
      firstName: "John",
      lastName: "Doe"
    }
  };

  handleChange = e => {
    this.setState(({ formValues }) => ({
      formValues: {
        ...formValues,
        [e.target.name]: e.target.value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.formValues);
  };

  render() {
    const { formValues } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <fieldset className="fieldset">
          <legend className="legend">Form with re-usable fields</legend>
          <Field
            value={formValues.firstName}
            name="firstName"
            label="First Name"
            onChange={this.handleChange}
          />

          <Field
            value={formValues.lastName}
            name="lastName"
            label="Last Name"
            onChange={this.handleChange}
          />

          <button type="submit" className="button">
            Submit
          </button>
        </fieldset>
      </form>
    );
  }
}
