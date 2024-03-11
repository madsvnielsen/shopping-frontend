import Banner from "../Components/Banner";
import StatusBar from "../Components/StatusBar";
import React, { useState } from 'react';


export function PaymentView() {


    
    return (
        <div>
            <Banner/>
            <StatusBar /> {}
            <form action="/my-handling-form-page" method="post">
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
                            <input type="text" id="name" name="user_name" maxLength={65} />
                        </p>
                        <p>
                            <label htmlFor="address1">Street address </label>
                            <input type="text" id="address1" name="user_address1" maxLength={65} />
                            <input type="text" id="address2" name="user_address2" maxLength={65} />
                        </p>
                        <p>
                            <label htmlFor="zip">Postal code </label>
                            <input type="" id="zip" name="user_zip" pattern="[1-9]{1}[0-9]{3}" /*TODO: match against https://api.dataforsyningen.dk/postnumre*//>
                        </p>
                        <p>
                            <label htmlFor="city">City </label>
                            <input type="text" id="city" name="user_city" /*TODO: Provide automatically from zip*/ /> 
                        </p>
                        <p>
                            <label htmlFor="comp_name">Company name </label>
                            <input type="text" id="comp_name" name="user_company" maxLength={65} />
                        </p>
                        <p>
                            <label htmlFor="comp_vat">Company VAT VALIDATE </label>
                            <input type="" id="comp_vat" name="user_companyvat" required maxLength={65}/>
                        </p>
                        <p>
                            <label htmlFor="phone">Phone </label>
                            <input type="tel" id="phone" name="user_phone" pattern="[1-9]{1}[0-9]{7}" />
                        </p>
                        <p>
                            <label htmlFor="mail">Email </label>
                            <input type="email" id="mail" name="user_email" pattern="^[\w-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$"/>
                        </p>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Payment method</legend>
                    <div>
                        <ul>
                            <li>
                                <label htmlFor="credit_card">Credit card</label>
                                <input type="radio" id="credit_card" name="payment_option" value="credit_card" checked />
                            </li>
                            <li>
                                <label htmlFor="mobile_pay">MobilePay</label>
                                <input type="radio" id="mobile_pay" name="payment_option" value="mobile_pay" />
                            </li>
                            <li>
                                <label htmlFor="google_pay">GooglePay</label>
                                <input type="radio" id="google_pay" name="payment_option" value="google_pay" />
                            </li>
                        </ul>
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