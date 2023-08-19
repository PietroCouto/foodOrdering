import React, { useState, useEffect } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/icons/CartIcon";
import { useCart } from "../../../store/cart-context";

const HeaderCartButton = ({ onCartOpen }) => {
  const [bntIsHighLighted, setBntIsHighLighted] = useState(false);
  const { items } = useCart();

  const itensQuantity = items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  const cartClickHandler = () => onCartOpen();

  const btnClasses = `${classes.button} ${
    bntIsHighLighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (itensQuantity === 0) {
      return;
    }

    setBntIsHighLighted(true);
    const timer = setTimeout(() => {
      setBntIsHighLighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [itensQuantity]);

  return (
    <button className={btnClasses} onClick={cartClickHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itensQuantity}</span>
    </button>
  );
};

export default HeaderCartButton;
