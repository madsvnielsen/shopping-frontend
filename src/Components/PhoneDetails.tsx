import React, { useState } from "react";
import "./CardDetails.css";

function PhoneDetails() {
  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = event.target.value.replace(/\s+/g, "");
    const formattedInput = value.split("").reduce((acc, digit, idx) => {
      return acc + (idx && idx % 2 === 0 ? " " : "") + digit;
    }, "");
    setPhoneNumber(formattedInput);
  };

  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="box">
      <label htmlFor="phone_no">Phone Number</label>
      <input
        className="form-control"
        type="text"
        id="phone_no"
        name="user_phone_no"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="XX XX XX XX XX"
      />
    </div>
  );
}

export default PhoneDetails;
