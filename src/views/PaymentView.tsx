import Banner from "../Components/Banner";
import StatusBar from "../Components/StatusBar";
import React, { useState } from 'react';


export function PaymentView() {

    const [isChecked, setIsChecked] = useState();
    function handlePaymentChoice() {}

    
    return (
        <div>
            <Banner/>
            <StatusBar /> {}
            <form action="handle_submit_form" method="post">
                <fieldset>
                    <legend>Delivery address</legend>
                    <div>
                        <p>
                            <label htmlFor="country">Country </label>
                            <select id="country" name="user_country" autoFocus>
                                <option selected>Denmark</option>
                            </select>
                        </p>
                        <p>
                            <label htmlFor="name">Full name </label>
                            <input type="text" id="name" name="user_name" required maxLength={65} />
                        </p>
                        <p>
                            <label htmlFor="comp_name">Company name </label>
                            <input type="text" id="comp_name" name="user_company" maxLength={65} />
                        </p>
                        <p>
                            <label htmlFor="comp_vat">Company VAT</label>
                            <input type="number" id="comp_vat" name="user_companyvat" pattern="[0-9]{8}" />
                        </p>
                        <p>
                            <label htmlFor="address1">Street address </label>
                            <input type="text" id="address1" name="user_address1" required maxLength={65} />
                            <input type="text" id="address2" name="user_address2" maxLength={65} />
                        </p>
                        <p>
                            <label htmlFor="zip">Postal code </label>
                            <input type="number" id="zip" name="user_zip" pattern="[1-9]{1}[0-9]{3}" required /*TODO: match against https://api.dataforsyningen.dk/postnumre*//>
                        </p>
                        <p>
                            <label htmlFor="city">City </label>
                            <input type="text" id="city" name="user_city" /*TODO: Provide automatically from zip*/ /> 
                        </p>
                        <p>
                            <label htmlFor="phone">Phone </label>
                            <input type="tel" id="phone" name="user_phone" pattern="[1-9]{1}[0-9]{7}" />
                        </p>
                        <p>
                            <label htmlFor="mail">Email </label>
                            <input type="email" id="mail" name="user_email" pattern="^[\w-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$" required />
                        </p>
                        Is delivery address and billing address the same?
                        <ul>
                            <li>
                                <label htmlFor="same_address">Yes</label>
                                <input type="radio" id="same_address" name="address" value="same_address" checked={true} />
                            </li>
                            <li>
                                <label htmlFor="notsame_address">No</label>
                                <input type="radio" id="notsame_address" name="address" value="notsame_address" />
                            </li>
                        </ul>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Payment method</legend>
                    <div>
                        <ul>
                            <li>
                                <label htmlFor="credit_card">Credit card</label>
                                <input type="radio" id="credit_card" name="payment_option" value="credit_card" 
                                    onChange={handlePaymentChoice}/>
                            </li>
                            <li>
                                <label htmlFor="pokemon_pay">Pokemon Trade</label>
                                <input type="radio" id="pokemon_pay" name="payment_option" value="pokemon_pay" />
                            </li>
                            <li>
                                <label htmlFor="kidney_pay">Kidney Payment</label>
                                <input type="radio" id="kidney_pay" name="payment_option" value="kidney_pay" />
                            </li>
                        </ul>
                        <p>
                            <label htmlFor="card_no">Card Number </label>
                            <input type="number" id="card_no" name="user_card" required pattern="[0-9]{16}" />
                        </p>
                        <p>
                            <label htmlFor="exp_date">Exp. date </label>
                            <input type="number" id="exp_date" name="user_expdate" required pattern="[0-3]{1}[0-9]{1}[0-1]{1}[0-9]{5}" />
                        </p>
                        <p>
                            <label htmlFor="card_cvv">CVV </label>
                            <input type="number" id="card_cvv" name="user_cardcvv" required pattern="[0-9]{3}" />
                        </p>
                    </div>
                </fieldset>

                <fieldset>
                    <div>
                        <p className="button">
                            <button type="submit">Continue</button>
                        </p>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}