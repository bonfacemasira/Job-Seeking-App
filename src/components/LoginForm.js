import React, { useState } from "react";

function LoginForm({onLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  


    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true)
      fetch("/login", {
       method: "POST",
       headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user))
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })
  }


  return (
    <div className="auth-form-container">
      <h1>JS</h1>
      <h2>Please login to your account</h2>
    <form className="register-form" onSubmit={handleSubmit}>
        <input value={email} onChange={(e)=>setEmail(e.target.value)}type = "email" placeholder="Email" id="email" name="email" />
        <input value={password} onChange={(e)=>setPassword(e.target.value)}type = "password" placeholder="Password" id="password" name="password" />
       <button type="submit" class="loginButton">LogIn</button> 
        </form>

        <h3>
        <span class="passwordField">Don't have an account?<a href="#">Register</a></span>
        </h3>
    
    </div>
  )
}
export default LoginForm;