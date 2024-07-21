import { useParams } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const params = useParams();

  return <EventItem event={params.id}/>;
}
