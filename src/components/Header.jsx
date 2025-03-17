import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <header className="header">
      <h1>🎭 CommunionHub</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <button onClick={toggleDarkMode} className="dark-mode-btn">
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
