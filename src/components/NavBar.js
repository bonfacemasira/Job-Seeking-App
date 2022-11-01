import "../App.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function NavBar({ user, setUser })) {
  //add user as a prop
  
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
            <button onClick={handleLogoutClick}>Logout</button>
          </>
        )}

      </nav>
        )}
      </div>
    </div>
  );
}

export default NavBar;
