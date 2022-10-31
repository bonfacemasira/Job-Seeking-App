import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  // const navigate = useNavigate();

	// function handleLogoutClick() {
	// 	fetch("/logout", { method: "DELETE" }).then((r) => {
	// 		if (r.ok) {
	// 			setUser(null);
	// 		}

	// 		if (r.ok){
	// 			navigate("/")
	// 		}
	// 	});
	// }
  return (
    <div className="wrapper">
      <h1 className="logo">JS</h1>
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
    </div>
  );
}

export default NavBar;
