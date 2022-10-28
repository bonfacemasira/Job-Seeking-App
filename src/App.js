import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import IdentityForm from "./components/IdentityForm";
import VerificationForm from "./components/VerificationForm";
import { ProSidebarProvider } from "react-pro-sidebar";
import AsideBar from "./components/asidebar/AsideBar";
import Job from "./components/jobs/job";
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
  // a trial to check if user exists 
  // i am using it to view the dashboard page 
  if (user)
    return (
      <ProSidebarProvider>
        <AsideBar/>
      </ProSidebarProvider>
    );

  return (
    <div className="App">
      <NavBar />
      <Login />
      <Job/>
      {/* <IdentityForm /> */}
      {/* <VerificationForm /> */}
    </div>
  );
}

export default App;
