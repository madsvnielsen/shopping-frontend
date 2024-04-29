import "./CardDetails.css";
import React, { useState } from "react";

function CardDetails() {
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = event.target.value.split(" ").join("");
    if (value.length > 16) {
      value = value.substring(0, 16);
    }
    const formattedInput = value.split("").reduce((acc, digit, idx) => {
      return acc + (idx && idx % 4 === 0 ? " " : "") + digit;
    }, "");
    setCardNumber(formattedInput);
  };

  const handleExpDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.split("/").join("");
    if (value.length > 4) {
      value = value.substring(0, 4);
    }
    const formattedInput =
      value.length > 2 ? value.slice(0, 2) + "/" + value.slice(2) : value;
    setExpDate(formattedInput);
  };

  return (
    <div className="box">
      <label htmlFor="card_no">Card Number</label>
      <input
        className="form-control"
        type="text"
        id="card_no"
        name="user_card"
        value={cardNumber}
        onChange={handleCardNumberChange}
        required
        pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
        placeholder="XXXX XXXX XXXX XXXX"
      />
      <label htmlFor="exp_date">Exp. date</label>
      <input
        className="form-control"
        type="text"
        id="exp_date"
        name="user_expdate"
        value={expDate}
        onChange={handleExpDateChange}
        required
        pattern="(0[1-9]|1[0-2])/([0-9]{2})"
        placeholder="MM/YY"
      />
      <label htmlFor="card_cvv">CVV</label>
      <input
        className="form-control"
        type="text"
        id="card_cvv"
        name="user_cardcvv"
        required
        pattern="[0-9]{3}"
        placeholder="XXX"
      />
    </div>
  );
}

export default CardDetails;
