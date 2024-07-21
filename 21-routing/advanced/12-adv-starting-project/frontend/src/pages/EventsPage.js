import EventsList from "../components/EventsList";

export default function EventsPage() {
  const events = [
    {
      id: "e1",
      title: "Programming for everyone",
      date: "2022-03-21",
      location: "Somestreet 25, 12345 San Somewhere",
      description: "Dummy",
    },
  ];

  return <EventsList events={events} />;
}
