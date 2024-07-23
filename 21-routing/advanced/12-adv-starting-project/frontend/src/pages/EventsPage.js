import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  // Browser side (client side) code logic
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // setError("Fetching events failed.");
  } else {
    return response
  }
}
