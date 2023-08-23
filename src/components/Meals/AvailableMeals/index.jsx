import React, { useEffect, useMemo } from "react";
import Card from "../../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "../MealItem";
import useFetch from "../../../hooks/useFetch";

const availableMealsUrl =
  "https://react-tests-ec6dc-default-rtdb.firebaseio.com/available-meals.json";

const AvailableMeals = () => {
  const {
    get: getAvailableMeals,
    loading: loadingAvailableMeals,
    data: availableMealsData,
    error: availableMealsError,
  } = useFetch();

  const availableMeals = useMemo(() => {
    let meals = [];

    if (availableMealsData) {
      for (const key in availableMealsData) {
        meals.push({
          id: key,
          name: availableMealsData[key].name,
          description: availableMealsData[key].description,
          price: availableMealsData[key].price,
        });
      }

        meals = meals.map((item) => (
        <MealItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ));
    }

    return meals;
  }, [availableMealsData]);

  useEffect(() => {
    getAvailableMeals(availableMealsUrl);
  }, []);

  return (
    <section className={classes.meals}>
      <Card>
        {loadingAvailableMeals && (
          <section className={classes.mealsLoading}>
            <p>Loading...</p>
          </section>
        )}
        {!loadingAvailableMeals && !availableMealsError && (
          <ul>{availableMeals}</ul>
        )}
        {!loadingAvailableMeals && availableMealsError && (
          <section className={classes.mealsError}>
            <p>Error!</p>
          </section>
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
