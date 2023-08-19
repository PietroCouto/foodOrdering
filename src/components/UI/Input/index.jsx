import React, { forwardRef } from "react";

import classes from "./Input.module.css";

const Input = forwardRef(({ label, inputProps }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={inputProps.id}>{label}</label>
      <input {...inputProps} />
    </div>
  );
});

export default Input;
