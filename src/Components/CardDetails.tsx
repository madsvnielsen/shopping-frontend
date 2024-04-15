import "./CardDetails.css";

function CardDetails() {
  return (
    <div className="box">
      <label htmlFor="card_no">Card Number </label>
      <input
        className="form-control"
        type="text"
        id="card_no"
        name="user_card"
        required
        pattern="[0-9]{16}"
        placeholder="XXXX XXXX XXXX XXXX"
      />
      <label htmlFor="exp_date">Exp. date </label>
      <input
        className="form-control"
        type="text"
        id="exp_date"
        name="user_expdate"
        required
        pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
        placeholder="MM/YY"
      />
      <label htmlFor="card_cvv">CVV </label>
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
