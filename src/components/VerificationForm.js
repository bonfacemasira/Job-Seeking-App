import React, { useState } from "react";


function VerificationForm({ onLogin }) {
    
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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
      body: JSON.stringify({ email,phoneNumber, country, birthDate, passport, idImage }),
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
        <h4>Lastly, confirm your details</h4>
        <form className="verification-form" onSubmit={handleSubmit}>
        <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="✉️ Email"
            id="email"
            name="email"
            />
            <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="phoneNumber"
            placeholder="☏ Phone Number"
            id="phoneNumber"
            name="phoneNumber"
          />
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
          type="passport" 
          //type="file"
          placeholder="🔓Upload your passport image"
          id="passport" 
          name="passport" 
          />
          <input 
          value={idImage}
          onChange={(e) => setIdImage(e.target.value)}
          type="idImage" 
          //type="file"
          placeholder="🔓Upload ID image"
          id="idImage" 
          name="IdImage" 
          />

          <button type="submit" className="formButton">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}
export default VerificationForm;
