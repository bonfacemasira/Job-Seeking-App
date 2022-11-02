import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function VerificationForm({ data, setJobSeekerData }) {
  const navigate = useNavigate();
  console.log(data);
  console.log(data.id);
  const [country, setCountry] = useState(data.country);
  const [fullName, setFullName] = useState(data.full_name);
  const [experience, setExperience] = useState(data.experience);
  const [skills, setSkills] = useState(data.skills);
  const [job_type, setJob] = useState(data.job_type);
  const [availability, setAvailability] = useState(data.availability);
  const [salary_expectation, setSalary] = useState(data.salary_expectation);

  // useEffect(() => {
  //   setCountry(data.country);
  //   setFullName(data.full_name);
  //   setExperience(data.experience);
  // }, [data]);

  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("country", country);
    formData.append("full_name", fullName);
    formData.append("salary_expectation", salary_expectation);
    formData.append("skills", skills);
    formData.append("availability", availability);
    formData.append("job_type", job_type);
    formData.append("experience", experience);

    // post data to backend
    fetch(`http://127.0.0.1:3000/job_seekers/${data.id}`, {
      method: "PATCH",
      // headers: {

      //   "Content-Type": "multipart/form-data"
      // },
      body: formData,
      // body: JSON.stringify({ country, birthDate, passport, idImage,full_name, salary_expectation, cv, skills, availability, cerificate, experience, job_type }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setJobSeekerData(user));
        navigate("/final");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="form-container">
      <div className="form-details">
        <h1>JS</h1>
        <h2>Lastly, confirm your details</h2>
        <form className="identity-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            placeholder="Enter your Full Name"
            id="name"
            name="name"
          />
          <label>Country</label>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="✉️ Country"
            id="country"
            name="country"
          />

          <label>Job Type</label>
          <input
            value={job_type}
            onChange={(e) => setJob(e.target.value)}
            type="text"
            placeholder="Enter your job type"
            id="job"
            name="job"
          />
          <label>Skills</label>
          <input
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            type="text"
            placeholder="Enter your skills here"
            id="skills"
            name="skills"
          />
          <label>Salary</label>
          <input
            value={salary_expectation}
            onChange={(e) => setSalary(e.target.value)}
            type="text"
            placeholder="What is your salary expectation?"
            id="salary"
            name="salary"
          />
          <label>Experience</label>
          <input
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            type="text"
            placeholder="Enter your experience"
            id="experience"
            name="experience"
          />
          <label>availability</label>
          <input
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            type="text"
            placeholder="What is your availability?"
            id="availability"
            name="availability"
          />
          <button type="submit" className="formButton">
            {isLoading ? "loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
export default VerificationForm;
