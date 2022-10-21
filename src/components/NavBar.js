import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <div className="wrapper">
      <h1 className="logo">JS</h1>
      <nav className="Nav">
        <Link to="/login" className="registerButton">Login</Link>
        <Link to="/register" className="registerButton">Sign Up</Link>
      </nav>
    </div>
  );
}

export default NavBar;