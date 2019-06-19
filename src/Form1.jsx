import React from "react";

export default class Form1 extends React.Component {
  state = {
    formValues: {
      name: "John Doe"
    }
  };

  handleChange = e => {
    this.setState(({ formValues }) => ({
      formValues: {
        ...formValues,
        name: e.target.value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.formValues.name);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <fieldset className="fieldset">
          <legend className="legend">Form with a simple input</legend>
          <div className="field">
            <label className="label" htmlFor="input">
              Name
            </label>
            <input
              className="input"
              type="text"
              value={this.state.formValues.name}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="button">
            Submit
          </button>
        </fieldset>
      </form>
    );
  }
}
