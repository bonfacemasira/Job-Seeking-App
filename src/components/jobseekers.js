import React, { useState, useEffect } from "react";

function Jobseekers() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/job_seekers")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <>
      <div className="wrapper1">
        <input
          type="text"
          placeholder="Search Job Seeker"
          className="formControl"
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <button className ="search-icon"></button> */}
      </div>
      {data && (
        <div className="container">
          {data
            .filter((item) => {
              if (search === "") {
                return item;
              } else if (
                item.job_type.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => (
              <div className="card-container" key={item.id}>
                <div>
                  <div className="card-style">
                    <div className="image">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrb7XeVpElaj3yF0M2zBadpBwR1H32HQQumw&usqp=CAU"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className="card-information">
                    <h2 className="info">{item.full_name}</h2>
                    <h3 className="info">{item.job_type}</h3>
                    <div>
                      <hr />
                    </div>
                    <div className="card-style">
                      <button
                        key={item.id}
                        onClick={() => {
                          handleToggle(item.id);
                        }}
                        type="submit"
                        className="cardButton"
                      >
                        {toggle ? "hide view" : "view"}
                      </button>
                      {toggle && (
                        <div className="togcontainer">
                          <h2 className="avail"> {item.skills}</h2>
                          <h2 className="avail"> {item.experience}</h2>
                          <h2 className="avail"> {item.salary_expectation}</h2>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default Jobseekers;
