import React from "react";
import Modal from "../UI/Modal";
import { useCart } from "../../store/cart-context";

import classes from "./Cart.module.css";
import CartItem from "./components/CartItem";

const Cart = ({ onCartClose }) => {
  const { items, totalAmount, addItem, removeItem } = useCart();
  const amount = totalAmount.toFixed(2);

  const cartItems = items.map((item) => (
    <CartItem
      key={item.id}
      price={item.price}
      amount={item.amount}
      name={item.name}
      onAdd={addItem.bind(null, { ...item, amount: 1 })}
      onRemove={removeItem.bind(null, item.id)}
    />
  ));
  const closeHandler = () => onCartClose();

  return (
    <Modal onBackDropClick={onCartClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ {amount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeHandler}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
