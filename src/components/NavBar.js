import "../App.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/Access";

function NavBar() {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const authenticated = JSON.parse(
      localStorage.getItem("authenticated") || false
    );
    setLoggedIn(authenticated);
  }, []);

  const navigate = useNavigate();

  function handleLogoutClick() {
      localStorage.setItem("user", JSON.stringify({}));
      localStorage.setItem("token", JSON.stringify(""));
      localStorage.setItem("authenticated", JSON.stringify(false));
      navigate("/");
  }

  return (
    <div className="wrapper">
      <h1 className="logo">JS</h1>
      <div>
        {loggedIn ? (
          <button className="formButton" onClick={handleLogoutClick}>
            Logout
          </button>
        ) : (
          <nav className="Nav">
            <Link to="/">Home</Link>
            <Link to="/Find talent">Find Talent</Link>
            <Link to="/job_seeker_profile">Employers</Link>
            <Link to="/login" className="navButton">
              Login
            </Link>
            <Link to="/register" className="navButton">
              Sign Up
            </Link>
          </nav>
        )}
      </div>
    </div>
  );
}

export default NavBar;
