import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

function PaymentForm({ onLogin }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkoutRequestID, setCheckoutID] = useState("");

  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("https://4595-41-212-84-46.eu.ngrok.io/stkpush", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((data) => setCheckoutID(data[1].CheckoutRequestID));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  console.log(checkoutRequestID);

  useEffect(() => {
    const interval = setInterval(() => {
      if (checkoutRequestID.length > 0) {
        fetch("https://4595-41-212-84-46.eu.ngrok.io/polling_payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ checkoutRequestID }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((data) => {
              console.log(data);
              if (data[0] === "success") {
                clearInterval(interval);
                if (data[1].ResultCode === "0") {
                  navigate("/card");
                  alert("payment was successful");
                } else {
                  alert(data[1].ResultDesc);
                }
              } else {
                console.log("Transaction processing");
              }
            });
          } else {
            r.json().then((err) => console.log(err));
          }
        });
      }
    }, 2000);
  });

  return (
    <div className="form-container">
      <div className="form-details">
        <h1>JS</h1>
        <h3 className="text">Please pay to subscribe</h3>
        <h3>It is a one time payment</h3>
        <form className="payment-form" onSubmit={handleSubmit}>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="phoneNumber"
            placeholder=" Phone Number"
            id="phoneNumber"
            name="phoneNumber"
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
