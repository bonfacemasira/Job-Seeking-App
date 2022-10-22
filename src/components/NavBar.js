import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="wrapper">
      <h1 className="logo">JS</h1>
      <nav className="Nav">
        <h1>Home</h1>
        <h1>Find Talent</h1>
        <h1>Employers</h1>
        <Link to="/login" className="navButton">
          Login
        </Link>
        <Link to="/register" className="navButton">
          Sign Up
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
