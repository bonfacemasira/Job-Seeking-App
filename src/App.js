// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Job Seeking App
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Login from "./pages/Login";

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
    <main>
      <Routes>
        <Route path="/login" element={ <LoginForm/> } />
        <Route path="/register" element={ <RegisterForm/> } />
      </Routes>
    </main>
  </div>);
}

export default App;