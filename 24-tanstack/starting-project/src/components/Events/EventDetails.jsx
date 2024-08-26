import { Link, Outlet, useNavigate } from "react-router-dom";

import Header from "../Header.jsx";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent, queryClient } from "../../utils/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EventDetails() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["event", { eventId: id }],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: () => deleteEvent(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      navigate("/events");
    },
  });

  const formattedDate = new Date(data?.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  function handleDelete() {
    mutate({ id });
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        <header>
          {isLoading && <p>Fetching event...</p>}
          {isError && (
            <ErrorBlock
              title={"Failed to fetch event"}
              message={error.info?.message}
            />
          )}
          <h1>{data?.title}</h1>
          <nav>
            <button onClick={handleDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data?.image}`} alt={data?.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data?.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {formattedDate + "@" + data?.time}
              </time>
            </div>
            <p id="event-details-description">{data?.description}</p>
          </div>
        </div>
      </article>
    </>
  );
}
