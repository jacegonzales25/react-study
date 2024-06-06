import { useState, useEffect } from "react";

import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  // Error handling or typical handling of fetching, 3 states
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch places");
        }

        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch places, please try again later.",
        });
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occured!" message={error} />;
  }

  return (
    <Places
      title="Available Places"
      isLoading={isFetching}
      loadingText={"Fetching place data..."}
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
