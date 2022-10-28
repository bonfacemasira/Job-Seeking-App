import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
//import UploadJob from "./components/Employer/UploadJob";
//import Login from "./pages/Login";
//import IdentityForm from "./components/IdentityForm";
//import VerificationForm from "./components/VerificationForm";
// import EmployerDashboard from "./components/Employer/EmployerDashboard";

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
    {/* <Login /> */}
    {/* <IdentityForm /> */}
    {/* <VerificationForm /> */}
    {/* < EmployerDashboard /> */}
    {/* < UploadJob /> */}
  </div>);
}

export default App;