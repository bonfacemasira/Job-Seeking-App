import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  //add user as a prop
  const user = "1";

  return (
    <div className="wrapper">
      <h1 className="logo">JS</h1>

      <nav className="Nav">
        {!user ? (
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
          </>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
