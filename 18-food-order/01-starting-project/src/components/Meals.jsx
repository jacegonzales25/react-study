import { useEffect, useState } from "react";

export default function Meals() {
    const [loadedMeals, setloadedMeals] = useState ([]);

    useEffect(() => {
        async function fetchMeals() {
            try {
              const response = await fetch("http://localhost:3000/meals");
            } catch (error) {
              console.log(error);
            }
            if (!response.ok) {
                <p>No response</p>
            }
        
            const meals = response.json()
            setloadedMeals(meals);
          }
          fetchMeals();
    }, [])
 

  return <ul id="meals">{
loadedMeals.map((meal) => <li key={meal.id}>{meal.name}</li>)

  }</ul>;
}
