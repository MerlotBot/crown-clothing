import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...OtherPros }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...OtherPros} />
    {label ? (
      <label
        className={`${OtherPros.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
