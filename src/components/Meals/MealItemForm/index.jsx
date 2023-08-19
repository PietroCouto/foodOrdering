import React, { useRef, useState } from "react";
import { useCart } from "../../../store/cart-context";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({ id, onAddToCart }) => {
  const [isFormValid, setIsFormValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    if (
      enteredAmount.trim().length === 0 ||
      Number(enteredAmount) > 5 ||
      Number(enteredAmount) < 1
    ) {
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);
    onAddToCart(Number(enteredAmount));
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        inputProps={{
          ref: amountInputRef,
          type: "number",
          min: 1,
          max: 10,
          step: 1,
          id: id,
          defaultValue: 1,
        }}
      />
      <button type="submit">+ Add</button>
      {!isFormValid && <p>Please, enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
