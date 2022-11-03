import React, { useState, useEffect } from "react";
import axios from "../api/Access";

function Offers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    axios.get(`/my_offers/${user?.id}`).then((r) => setOffers(r.data));
  }, []);
  console.log(offers);

  return (
    <div className="container">
      {offers?.map((offer) => (
        <div
          className="card-container"
          key={offer.id}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="image">
            <img src="https://logodix.com/logo/1433.png" alt="logo" />
          </div>
          <div className="card-information">
            <h2 className="info">{offer.employer.organization}</h2>
            <h3 className="info">{offer.job_title}</h3>
            <div className="card-style">
              <button type="submit" className="card-button">
                View Offer
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Offers;
