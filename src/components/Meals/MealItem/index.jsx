import React from "react";
import MealItemForm from "../MealItemForm";
import { useCart } from "../../../store/cart-context";

import classes from "./MealItem.module.css";

const MealItem = ({ name, id, description, price }) => {
  const { addItem } = useCart();

  const addItemToCartHandler = (amount) => {
    addItem({ amount, name, id, price });
  };
  const mealPrice = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>
          <p>{description}</p>
        </div>
        <div className={classes.price}>
          <p>{mealPrice}</p>
        </div>
      </div>
      <div>
        <MealItemForm onAddToCart={addItemToCartHandler} id={id} />
      </div>
    </li>
  );
};

export default MealItem;
