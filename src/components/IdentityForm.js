import React, { useState } from "react";


function IdentityForm({ onLogin }) {
    
  const [country, setCountry] = useState("");
  const [birthDate, setBirthDate] = useState("")
  const [passport, setPassport] = useState();
  const [idImage, setIdImage] = useState();
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState("");

  

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/identity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ country, birthDate, passport, idImage }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="form-container">
      <div className="form-details">
        <h1>JS</h1>
        <h2>Verify your identity</h2>
        <form className="identity-form" onSubmit={handleSubmit}>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            type="country"
            placeholder="✉️ Country"
            id="country"
            name="country"
          />
          <input
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          type="date"                                   
          placeholder="Date of Birth"
          id="birthDate" 
          name="birthDate" 
          />  
          <input 
          value={passport}
          onChange={(e) => setPassport(e.target.value)}
<<<<<<< HEAD
          type="passport" 
          //type="file"
=======
          type="file"
>>>>>>> e8cd12fb720db19f8c94d5110a93709b3f9aae7f
          placeholder="🔓Upload your passport image"
          id="passport" 
          name="passport" 
          />
          <input 
          value={idImage}
          onChange={(e) => setIdImage(e.target.value)}
<<<<<<< HEAD
          type="idImage" 
          //type="file"
=======
          type="file"
>>>>>>> e8cd12fb720db19f8c94d5110a93709b3f9aae7f
          placeholder="🔓Upload ID image"
          id="idImage" 
          name="IdImage" 
          />

          <button type="submit" className="formButton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default IdentityForm;
