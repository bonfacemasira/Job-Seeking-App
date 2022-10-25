import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import { ProSidebarProvider } from "react-pro-sidebar";
import Dashboard from "./components/dashboard/Dashboard";

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
  if (!user)
    return (
      <ProSidebarProvider>
        <Dashboard />
      </ProSidebarProvider>
    );

  return (
    <div className="App">
      <NavBar />

      <Login />
    </div>
  );
}

export default App;
