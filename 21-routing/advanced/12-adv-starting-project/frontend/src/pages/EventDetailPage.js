import { useParams } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Event Detail Page</h1>
      <p>{params.id}</p>
      <EventItem event={params.id} />
    </>
  );
}
