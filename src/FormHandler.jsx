import React from "react";

export default class FormHandler extends React.Component {
  state = {
    formValues: this.props.initialValues
  };

  handleChange = e => {
    e.persist();
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
    return this.props.children({
      values: this.state.formValues,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit
    });
  }
}
