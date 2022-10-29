import React, { useState, useEffect } from "react";
import '../styles/EditProfile.css'

function EditProfile() {

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [documents, setDocuments] = useState("");
    const [title, setTitle] = useState("");
    const [salary, setSalary] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/profiles", {
            method: "PATCH",
            body: JSON.stringify({
                name,
                phoneNumber,
                dob,
                email,
                documents,
                title,
                salary,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
    }
  
  return (
    <form onSubmit={handleSubmit}>
        <input type="file" multiple accept="image/*" />
        <label>Name 
            <input 
            type="text"
            name="name" 
            placeholder="Principal Kelvin"
            value={name}
            onChange={(e) => setName(e.target.value)}></input>
        </label>
        <label>Phone Number 
            <input 
            type="text" 
            name="phone_number" 
            placeholder="+2547 99912121"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}></input>
        </label>
        <label>Date of Birth 
            <input 
            type="date" 
            name="dob" 
            placeholder="Principal Kelvin"
            value={dob}
            onChange={(e) => setDob(e.target.value)}></input>
        </label>
        <label>Email 
            <input 
            type="email" 
            name="email" 
            placeholder="johndoe@protonmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}></input>
        </label>
        <label>Documents 
            <input 
            type="file"
            value={documents}
            onChange={(e) => setDocuments(e.target.value)}></input>
        </label>
        <label>Job Title 
            <input 
            type="text" 
            name="title" 
            placeholder="UI/UX Designer"
            value={title}
            onChange={(e) => setTitle(e.target.value)}></input>
        </label>
        <label>Salary 
            <input 
            type="number" 
            name="salary" 
            placeholder="Ksh 20,000 - Ksh 100,000"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}></input>
        </label>
        <button type="submit" className="formButton" onClick={handleSubmit}>
            Submit
          </button>
    </form>
  );
}
export default EditProfile;