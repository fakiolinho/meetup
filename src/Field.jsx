import React from "react";

const Field = ({ label, name, value, onChange }) => (
  <div className="field">
    <label className="label" htmlFor="input">
      {label}
    </label>
    <input
      className="input"
      type="text"
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Field;
