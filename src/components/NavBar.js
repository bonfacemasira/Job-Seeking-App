import "../App.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ user, setUser }) {

  const navigate = useNavigate();

	function handleLogoutClick() {
		fetch("http://127.0.0.1:3000/users/sign_out", { method: "DELETE" }).then((r) => {
			if (r.ok) {
				setUser(null);
			}

			if (r.ok){
				navigate("/")
			}
		});
	}


  return (
    <div className="wrapper">
      <h1 className="logo">JS</h1>
      <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <nav className="Nav">
        <Link to= '/'>Home</Link>
        <Link to= '/Find talent'>Find Talent</Link>
        <Link to= '/job_seeker_profile'>Employers</Link>
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
