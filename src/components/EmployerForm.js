import React, { useEffect, useState } from 'react';

function EmployerForm({user, onLogin}){
    const[organization, setOrganization] = useState("");
    const[phone_number, setPhoneNumber] = useState("");
    const[image, setImage] = useState(null);
    const[errors,setErrors] = useState("");
    const[isLoading, setIsLoading] = useState(true)
    const[users,setUsers] = useState([])

    // useEffect(()=>{
    //     fetch("http://127.0.0.1:3000/users")
    //     .then(res => res.json())
    //     .then(data => setUsers(data))
    // }, [])


    function handleSubmit(e){
        e.preventDefault();
    const formData = new FormData();
        // formData.append("user_id",users[0].id)
        formData.append("organization", organization);
        formData.append("phone_number", phone_number);
        formData.append("image", image);
    

    fetch("http://127.0.0.1:3000/employers", {
        method: "POST",   
        body: formData,

      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => onLogin(user));
       
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }

      return(
        <div className="form-container">
        <div className="form-details">
        <h1>JS</h1>
        <h2>Verify your identity</h2>
        <form className="identity-form" onSubmit={handleSubmit}>
        <input
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            type="text"
            accept="application/pdf,application/vnd.ms-excel"
            placeholder="Enter your Organization Name"
            id="organization"
            name="organization"
          />
          <input
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            placeholder="Enter your PhoneNumber here"
            id="skills"
            name="skills"
          />
          <label for="inputTag" className="label">
            Upload Image
           <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            // accept="application/pdf,application/vnd.ms-excel"
            placeholder="🔓Upload ID image"
            id="inputTag"
            className="idmage"
          />
          </label>
          <button type="submit" className="formButton">
            Submit
          </button>
      </form>
        </div>
        </div>
      )
    }
    export default EmployerForm;
  

