import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import IdentityForm from "./components/IdentityForm";
import VerificationForm from "./components/VerificationForm";
import { ProSidebarProvider } from "react-pro-sidebar";
import AsideBar from "./components/asidebar/AsideBar";

function App() {
  const [user, setUser] = useState(null);

  //to delete set user to admin
  useEffect(()=>{
    setUser("jobseeker")
  },[])


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
  if (user === "admin")
    return (
      <ProSidebarProvider>
        <AsideBar />
      </ProSidebarProvider>
    );

  return (
    <div className="App">
      <NavBar />
      <Login />
      <IdentityForm />
      {/* <VerificationForm /> */}
    </div>
  );
}

export default App;
