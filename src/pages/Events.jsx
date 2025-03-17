import React, { useState } from "react";
import "../styles/Events.css";

const Events = () => {
  // State for events
  const [events, setEvents] = useState([
    {
      name: "React Workshop",
      category: "Tech",
      date: "2025-03-18",
      location: "Pune",
      description: "Learn React from experts in this hands-on workshop!",
    },
    {
      name: "Music by Raftaar",
      category: "Music",
      date: "2025-03-19",
      location: "Pune",
      description: "Experience a thrilling live performance by Raftaar!",
    },
  ]);

  // State for new event form
  const [newEvent, setNewEvent] = useState({
    name: "",
    category: "",
    date: "",
    location: "",
    description: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  // Add event function
  const addEvent = () => {
    if (!newEvent.name || !newEvent.category || !newEvent.date || !newEvent.location || !newEvent.description) {
      alert("Please fill in all fields.");
      return;
    }

    setEvents([...events, newEvent]); // Add new event
    setNewEvent({ name: "", category: "", date: "", location: "", description: "" }); // Reset fields
  };

  return (
    <div className="events-container">
      <h2>🎉 Upcoming Events</h2>

      <div className="event-filter">
        <input type="text" name="name" value={newEvent.name} onChange={handleChange} placeholder="Event Name" />
        <select name="category" value={newEvent.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="Tech">Tech</option>
          <option value="Music">Music</option>
          <option value="Sports">Sports</option>
        </select>
        <input type="date" name="date" value={newEvent.date} onChange={handleChange} />
        <input type="text" name="location" value={newEvent.location} onChange={handleChange} placeholder="Location" />
        <input type="text" name="description" value={newEvent.description} onChange={handleChange} placeholder="Short Description" />
        <button className="add-event-btn" onClick={addEvent}>Add Event</button>
      </div>

      <div className="event-list">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.name}</h3>
            <p className="event-category">🎭 {event.category}</p>
            <p className="event-date">📅 {event.date}</p>
            <p className="event-location">📍 {event.location}</p>
            <p className="event-description">📝 {event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
