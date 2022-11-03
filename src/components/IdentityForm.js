import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function IdentityForm({ data }) {
  const navigate = useNavigate();

  const countryRef = useRef();
  const birthDateRef = useRef();
  const full_nameRef = useRef();
  const [passport, setPassport] = useState(null);
  const [idImage, setIdImage] = useState(null);
  const [errors, setErrors] = useState("");
  const [cv, setCv] = useState(null);
  const [cerificate, setCertificate] = useState(null);
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [job_type, setJob] = useState("");
  const [availability, setAvailability] = useState("");
  const [salary_expectation, setSalary] = useState("");
  const [isLoading, setIsLoading] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("country", countryRef.current.value);
    formData.append("birthdate", birthDateRef.current.value);
    formData.append("passport", passport);
    formData.append("image", idImage);
    formData.append("full_name", full_nameRef.current.value);
    formData.append("salary_expectation", salary_expectation);
    formData.append("skills", skills);
    formData.append("availability", availability);
    formData.append("job_type", job_type);
    formData.append("cv", cv);
    formData.append("certificate", cerificate);
    formData.append("experience", experience);

    // post data to backend
    fetch("http://127.0.0.1:3000/job_seekers", {
      method: "POST",
      body: formData,
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => data(user));
        navigate("/finalization");
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
            ref={full_nameRef}
            type="text"
            placeholder="Enter your Full Name"
            id="name"
            name="name"
          />
          <input
            ref={countryRef}
            type="country"
            placeholder="✉️ Country"
            id="country"
            name="country"
          />
          <input
            ref={birthDateRef}
            type="date"
            placeholder="Date of Birth"
            id="birthDate"
            name="birthDate"
          />
           <label for="inputTag" className="label">
             Upload your passport
          <input
            type="file"
            onChange={(e) => setPassport(e.target.files[0])}
            // accept="application/pdf,application/vnd.ms-excel"
            placeholder="🔓Upload your passport image"
            id="inputTag"
            className="idmage"
          />
          </label>
          <label for="inputTag" className="label">
            Upload your Image
          <input
            onChange={(e) => setIdImage(e.target.files[0])}
            type="file"
            // accept="application/pdf,application/vnd.ms-excel"
            placeholder="🔓Upload ID image"
            id="inputTag"
            className="idmage"
          />
          </label>
          <input
            value={job_type}
            onChange={(e) => setJob(e.target.value)}
            type="text"
            accept="application/pdf,application/vnd.ms-excel"
            placeholder="Enter your job type"
            id="job"
            name="job"
          />
          <input
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            type="text"
            placeholder="Enter your skills here"
            id="skills"
            name="skills"
          />
          <input
            value={salary_expectation}
            onChange={(e) => setSalary(e.target.value)}
            type="text"
            placeholder="What is your salary expectation?"
            id="salary"
            name="salary"
          />
          <input
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            type="text"
            placeholder="Enter your experience"
            id="experience"
            name="experience"
          />
          <input
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            type="text"
            placeholder="What is your availability?"
            id="availability"
            name="availability"
          />
           <label for="inputTag" className="label">
             Upload your CV
          <input
            onChange={(e) => setCv(e.target.files[0])}
            type="file"
            accept="application/pdf,application/vnd.ms-excel"
            placeholder="🔓Upload your CV"
            id="inputTag"
            className="idmage"
          />
          </label>
          <label for="inputTag" className="label">
            Upload your certificates
          <input
            onChange={(e) => setCertificate(e.target.files[0])}
            type="file"
            accept="application/pdf,application/vnd.ms-excel"
            placeholder="🔓Upload your certificate"
            id="inputTag"
            className="idmage"
          />
          </label>

          <button type="submit" className="formButton">
            {isLoading ? "loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
export default IdentityForm;
