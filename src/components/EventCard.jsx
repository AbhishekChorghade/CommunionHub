import React from "react";
import "../styles/Events.css";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <p className="event-category">🎭 {event.category}</p>
      <p className="event-date">📅 {event.date}</p>
      {event.location && <p className="event-location">📍 {event.location}</p>}
      {event.description && <p className="event-description">📝 {event.description}</p>}
    </div>
  );
};

export default EventCard;
