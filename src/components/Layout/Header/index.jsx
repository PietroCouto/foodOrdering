import React from "react";
import mealsImg from "../../../assets/images/meals.jpg";
import HeaderCartButton from "../HeaderCartButton";

import classes from "./Header.module.css";

const Header = ({ onCartOpen }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onCartOpen={onCartOpen} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="Meals" />
      </div>
    </>
  );
};

export default Header;
