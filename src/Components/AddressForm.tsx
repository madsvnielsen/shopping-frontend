import { ICity } from "../interfaces/ICity";
import { CityAPI } from "../CityAPI";
import { useState, useContext } from "react";
import { OrderInfoContext } from "../App";
import "./AddressForm.css";

function AddressForm() {
  
  const {orderInfo, setOrderInfo} = useContext(OrderInfoContext)

  async function ValidateZip(value: string) {
    setOrderInfo({...orderInfo, zipCode: value} as OrderInfo)
    const newCity: ICity[] = await CityAPI.getCity();
    const result = newCity.find((a) => a.nr.toString() === value);
    if (result) {
      setOrderInfo({...orderInfo, city: result.navn, zipCode: value} as OrderInfo)
    }
  }

  return (
    <div className="form-control-group">
      <label htmlFor="country">Country </label>
      <select
        className="form-control"
        id="country"
        name="user_country"
        autoFocus
      >
        <option selected>Denmark</option>
      </select>
      <label htmlFor="address1">Street address </label>
      <input
        className="form-control"
        type="text"
        id="address1"
        name="user_address1"
        required
        maxLength={65}
        placeholder="Båndegårdsvej 1"
        value={orderInfo.streetName}
        onChange={(e) => setOrderInfo({...orderInfo, streetName: e.target.value} as OrderInfo)}
      />
      <input
        className="form-control"
        type="text"
        id="address2"
        name="user_address2"
        maxLength={65}
        placeholder="2. th."
      />
      <label htmlFor="zip">Postal code </label>
      <input
        className="form-control"
        type="text"
        id="zip"
        name="user_zip"
        required
        onChange={(e) => ValidateZip(e.target.value)}
        placeholder="1234"
        value={orderInfo.zipCode}
      />
      <label htmlFor="city">City </label>
      <input
        className="form-control"
        type="text"
        id="city"
        name="user_city"
        onChange={(e) => setOrderInfo({...orderInfo, city: e.target.value} as OrderInfo)}
        value={orderInfo.city}
        placeholder="Båndegårdbyen"
      />
    </div>
  );
}

export default AddressForm;
