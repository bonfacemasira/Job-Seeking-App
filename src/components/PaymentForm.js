import React, { useState } from "react";

function PaymentForm({ onLogin }) {
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [payment, setPayment] = useState([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState("");

  

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ companyName, phoneNumber, payment }),
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
        <h3 class="text">Please pay to subscribe</h3>
        <h3>It is a one time payment</h3>
        <form className="payment-form" onSubmit={handleSubmit}>
          <input
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            type="companyName"
            placeholder="✉️ Company Name"
            id="companyName"
            name="companyName"
          />
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="phoneNumber"
            placeholder=" Phone Number"
            id="phoneNumber"
            name="phoneNumber"
          />
          
          <input
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            type="payment"
            placeholder="Ksh 000"
            id="payment"
            name="payment"
          />
          <button type="submit" className="formButton">
            Pay
          </button>
        </form>
      </div>
    </div>
  );
}
export default PaymentForm;
