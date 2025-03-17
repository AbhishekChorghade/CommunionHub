import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "../redux/eventSlice";
import "../styles/EventForm.css";

const EventForm = () => {
  const dispatch = useDispatch();
  const [eventData, setEventData] = useState({
    name: "",
    category: "",
    date: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventData.name && eventData.category && eventData.date) {
      dispatch(addEvent(eventData));
      setEventData({ name: "", category: "", date: "", location: "", description: "" });
    } else {
      alert("Please fill in all required fields!");
    }
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Event Name" value={eventData.name} onChange={handleChange} required />
      <select name="category" value={eventData.category} onChange={handleChange} required>
        <option value="">Select Category</option>
        <option value="Music">Music</option>
        <option value="Tech">Tech</option>
        <option value="Sports">Sports</option>
      </select>
      <input type="date" name="date" value={eventData.date} onChange={handleChange} required />
      <input type="text" name="location" placeholder="Location" value={eventData.location} onChange={handleChange} />
      <textarea name="description" placeholder="Short Description" value={eventData.description} onChange={handleChange}></textarea>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
