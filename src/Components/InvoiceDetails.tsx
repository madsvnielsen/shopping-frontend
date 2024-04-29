import "./CardDetails.css";

function InvoiceDetails() {
  return (
    <div className="box">
      <label htmlFor="comp_vat">Company name</label>
      <input
        className="form-control"
        type="text"
        id="comp_name"
        name="user_company"
        required
        maxLength={65}
        placeholder="Enter company name"
      />
      <label htmlFor="comp_vat">Company VAT</label>
      <input
        className="form-control"
        type="number"
        id="comp_vat"
        name="user_companyvat"
        required
        pattern="[0-9]{8}"
        placeholder="Enter company VAT"
      />
    </div>
  );
}

export default InvoiceDetails;
