import { useEffect, useState } from "react";
import MealItem from "./MealItem.jsx";

export default function Meals() {
  const [loadedMeals, setloadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");
        const meals = await response.json();
        setloadedMeals(meals);
        if (!response.ok) {
          <p>No response</p>;
        }
      } catch (error) {
        throw new Error("Network response was not ok");
      }
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
