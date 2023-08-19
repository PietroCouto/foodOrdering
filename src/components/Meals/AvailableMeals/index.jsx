import React from "react";
import Card from "../../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "../MealItem";

const AvailableMeals = () => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  const displayMeals = DUMMY_MEALS.map((item) => {
    return (
      <MealItem
        name={item.name}
        id={item.id}
        description={item.description}
        price={item.price}
        key={item.id}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{displayMeals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
