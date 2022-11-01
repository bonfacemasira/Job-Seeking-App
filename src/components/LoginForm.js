import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "../api/Access";


function LoginForm({ setUser,user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  
	const navigate = useNavigate();
  
  function handleSubmit(e) {
    e.preventDefault();

    axios.post("/users/login",
    {email: email,
    password: password
  }).then((r) => {
    localStorage.setItem("user", JSON.stringify(r.data.user));
    localStorage.setItem("token", JSON.stringify(r.data.token));
    localStorage.setItem("authenticated", JSON.stringify(true));
      if (r.data.user.role === "job_seeker") {
        navigate("/job_seeker_profile");
      } else {
        navigate("/employer_profile");
      }
    });
  }

  return (
    <div className="form-container">
      <div className="form-details">
        <h1>JS</h1>
        <h2>Please login to your account</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
            id="email"
            name="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
      
          <button type="submit" className="formButton">  
            LogIn
          </button>
        </form>

        <h3>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </h3>
      </div>
    </div>
  );
}
export default LoginForm;
