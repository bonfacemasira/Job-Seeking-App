import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
//import IdentityForm from "./components/IdentityForm";
import VerificationForm from "./components/VerificationForm";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
  <div className="App">
   
    <NavBar />
    <Login />
    {/* <IdentityForm /> */}
    {/* <VerificationForm /> */}
  </div>);
}

export default App;