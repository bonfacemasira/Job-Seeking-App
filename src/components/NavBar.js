import "../App.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
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
      <h1 className="logo">Job Seeking App</h1>
      <nav className="Nav">
        {!loggedIn ? (
          <>
            <Link to="/login" className="navButton">
              Login
            </Link>
            <Link to="/register" className="navButton">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            {/* create clicks to show dropdowns  */}
            <div className="notifications">
              <FontAwesomeIcon icon={faBell} />
              <div className="total_notifications">9</div>
            </div>
            <div className="user_prof">
              <div className="user_image">
                <img src="#" alt="prof" />
              </div>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
             <button className="formButton" onClick={handleLogoutClick}>
            Logout
          </button>
          </>

        )}
      </nav>
    </div>
  );
}

export default NavBar;
