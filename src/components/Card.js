import React, { useState, useEffect } from "react";

function Card() {
  // const [companyName, setCompanyName] = useState("");
  // useEffect(() => {
  //   // declare the async data fetching function
  //   const fetchData = async () => {
  //     // get the data from the api
  //     const companyName = await fetch('');
  //     // convert the data to json
  //     const json = await response.json();

  //     // set state with the result
  //     setCompanyName(json);
  //   }

  //   // call the function
  //   fetchData()
  //     // make sure to catch any error
  //     .catch(console.error);;
  // }, [])

  return (
    <div className="container">
      <div className="card-container">
        <div className="card-style">
          <div className="image">
            <img src="https://logodix.com/logo/1433.png" alt="logo" />
          </div>
        </div>
        <div className="card-information">
          <h2 className="info">Microsoft</h2>
          <h3 className="info">UI/UX designer</h3>
          <div>
            <hr />
          </div>
          <div className="card-style">
            <button type="submit" className="card-button">
              View Offer
            </button>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-style">
          <div className="image">
            <img className="image" src="https://logodix.com/logo/317142.png" />
          </div>
        </div>
        <div className="card-information">
          <h2 className="info">Apple</h2>
          <h3 className="info">Data Analyst</h3>
          <div>
            <hr />
          </div>
          <div className="card-style">
            <button type="submit" className="card-button">
              View Offer
            </button>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card-style">
          <div className="image">
            <img
              className="image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTh-soG49NeQyJP4j53Fm9w-mODXs6plBmmr_aQhhVFQ4dtfZMIgI0u4FU7Cp9vSsSfI&usqp=CAU"
            />
          </div>
        </div>
        <div className="card-information">
          <h2 className="info">Safaricom</h2>
          <h3 className="info">Full Stack Developer</h3>
          <div>
            <hr />
          </div>
          <div className="card-style">
            <button type="submit" className="card-button">
              View Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
