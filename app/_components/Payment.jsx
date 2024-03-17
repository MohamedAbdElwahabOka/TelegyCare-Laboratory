// pages/payment.js
'use client'
import React, { useState } from "react";
import Card from "react-credit-cards";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from "../utils";

import "react-credit-cards/es/styles-compiled.css";

const Payment = () => {
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null
  });

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setState({ issuer });
    }
  };

  const handleInputFocus = ({ target }) => {
    setState({
      focused: target.name
    });
  };

  const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    setState({ [target.name]: target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    setState({ formData });
    e.target.reset();
  };

  const { name, number, expiry, cvc, focused, issuer, formData } = state;

  return (
    <div key="Payment">
      <div className="App-payment">
        <h1>Enter your payment details</h1>
        <h5>please input your information below</h5>
        <Card
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          callback={handleCallback}
        />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="tel"
              name="number"
              className="form-control"
              placeholder="Card Number"
              pattern="[\d| ]{16,22}"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            {/* <small>E.g.: 49..., 51..., 36..., 37...</small> */}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="row">
            <div className="col-6">
              <input
                type="tel"
                name="expiry"
                className="form-control"
                placeholder="Valid Thru"
                pattern="\d\d/\d\d"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="col-6">
              <input
                type="tel"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                pattern="\d{3,4}"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
          </div>
          <input type="hidden" name="issuer" value={issuer} />
          <div className="form-actions">
            <button className="btn btn-primary btn-block">PAY</button>
          </div>
          <div className="form-actions">
            <button className="btn btn-primary btn-block">Home</button>
          </div>
        </form>

        {formData && (
          <div className="App-highlight">
            {formatFormData(formData).map((d, i) => (
              <div key={i}>{d}</div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
};

export default Payment;