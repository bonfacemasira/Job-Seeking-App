import React from "react";

function EditProfile() {

    function handleSubmit(e) {
        e.preventDefault();
    }
  
  return (
    <form onSubmit={handleSubmit}>
        <input type="file" multiple accept="image/*" />
        <label>Name 
            <input type="text"name="name" placeholder="Principal Kelvin"></input>
        </label>
        <label>Phone Number 
            <input type="text" name="phone_number" placeholder="+2547 99912121"></input>
        </label>
        <label>Date of Birth 
            <input type="date" name="dob" placeholder="Principal Kelvin"></input>
        </label>
        <label>Email 
            <input type="email" name="email" placeholder="johndoe@protonmail.com"></input>
        </label>
        <label>Documents 
            <input type="file"></input>
        </label>
        <label>Job Title 
            <input type="text" name="title" placeholder="UI/UX Designer"></input>
        </label>
        <label>Salary 
            <input type="number" name="salary" placeholder="Ksh 20,000 - Ksh 100,000"></input>
        </label>
        <button type="submit" className="formButton" onClick={handleSubmit}>
            Submit
          </button>
    </form>
  );
}
export default EditProfile;