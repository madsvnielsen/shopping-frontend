import Banner from "../Components/Banner";
import "./PaymentView.css";
import React, {useContext, useState} from "react";
import CardDetails from "../Components/CardDetails.tsx";
import PhoneDetails from "../Components/PhoneDetails.tsx";
import GiftDetails from "../Components/GiftDetails.tsx";
import StatusBar from "../Components/StatusBar.tsx";
import InvoiceDetails from "../Components/InvoiceDetails.tsx";
import AddressForm from "../Components/AddressForm.tsx";
import {OrderInfoContext} from "../App.tsx";
import {useNavigate} from "react-router-dom";

export function PaymentView() {
    const {orderInfo, setOrderInfo} = useContext(OrderInfoContext)

    const navigate = useNavigate();


    const [deliveryAddress, setDeliveryAddress] = useState<boolean>(false);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDeliveryAddress(e.target.checked);
    };

    const [hasAgreedToTerms, setHasAgreedToTerms] = useState(false);

    const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHasAgreedToTerms(e.target.checked);
    };

    const [hasAgreedToMails, setHasAgreedToMails] = useState(false);
    const handleMailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHasAgreedToMails(e.target.checked);
    };


    const [userMessage, setUserMessage] = useState("");

    return (
        <div className="shopPage">
            <Banner goToBasket={false}/>
            <StatusBar activeStep={2}/>
            <form
                action="handle_submit_form"
                className="form-container"
            >
                <fieldset>
                    <legend>Billing Information</legend>
                    <div className="form-control-group">
                        <label htmlFor="name">Full name </label>
                        <input
                            className="form-control"
                            type="text"
                            id="name"
                            name="user_name"
                            required
                            maxLength={65}
                            placeholder="Anders Andersen"
                            value={orderInfo.fullName}
                            onChange={(e) => setOrderInfo({...orderInfo, fullName: e.target.value} as OrderInfo)}
                        />
                        <label htmlFor="phone">Phone </label>
                        <input
                            className="form-control"
                            type="tel"
                            id="phone"
                            name="user_phone"
                            required
                            pattern="\+[1-9]{1,3}[1-9][0-9]{6,14}"
                            placeholder="+XXXXXXXXXX"
                            value={orderInfo.phoneNumber}
                            onChange={(e) => setOrderInfo({...orderInfo, phoneNumber: e.target.value} as OrderInfo)}
                        />
                        <label htmlFor="mail">Email </label>
                        <input
                            className="form-control"
                            type="email"
                            id="mail"
                            name="user_email"
                            required
                            pattern="^[\w-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$"
                            placeholder="anders@andersen.dk"
                            value={orderInfo.email}
                            onChange={(e) => setOrderInfo({...orderInfo, email: e.target.value} as OrderInfo)}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Billing address</legend>
                    <div className="form-control-group">
                        <AddressForm/>
                        <div>
                            <input
                                className="form-control"
                                type="checkbox"
                                id="same_address"
                                name="address"
                                onChange={handleCheckboxChange}
                                checked={deliveryAddress}
                            />
                            Alternative delivery address
                        </div>
                    </div>
                </fieldset>

                {deliveryAddress && (
                    <fieldset>
                        <legend>Delivery address</legend>
                        <AddressForm/>
                    </fieldset>
                )}
                <div>

                    <fieldset>
                        <legend>Payment method</legend>
                        <div className="form-control-group">
                            <ul className="form-select-group">
                                <li className="form-select">
                                    <label htmlFor="credit_card">Credit card</label>
                                    <input
                                        className="form-control"
                                        type="radio"
                                        id="credit_card"
                                        name="payment_option"
                                        value="credit_card"
                                        checked={orderInfo.paymentMethod === "credit_card"}
                                        onChange={(e) => setOrderInfo({
                                            ...orderInfo,
                                            paymentMethod: e.target.value
                                        } as OrderInfo)}
                                    />
                                </li>
                                <li className="form-select">
                                    <label htmlFor="mobile_pay">Mobile Pay</label>
                                    <input
                                        className="form-control"
                                        type="radio"
                                        id="mobile_pay"
                                        name="payment_option"
                                        value="mobile_pay"
                                        checked={orderInfo.paymentMethod === "mobile_pay"}
                                        onChange={(e) => setOrderInfo({
                                            ...orderInfo,
                                            paymentMethod: e.target.value
                                        } as OrderInfo)}
                                    />
                                </li>
                                <li className="form-select">
                                    <label htmlFor="gift_card">Gift card</label>
                                    <input
                                        className="form-control"
                                        type="radio"
                                        id="gift_card"
                                        name="payment_option"
                                        value="gift_card"
                                        checked={orderInfo.paymentMethod === "gift_card"}
                                        onChange={(e) => setOrderInfo({
                                            ...orderInfo,
                                            paymentMethod: e.target.value
                                        } as OrderInfo)}
                                    />
                                </li>
                                <li className="form-select">
                                    <label htmlFor="invoice">Invoice</label>
                                    <input
                                        className="form-control"
                                        type="radio"
                                        id="invoice"
                                        name="payment_option"
                                        value="invoice"
                                        checked={orderInfo.paymentMethod === "invoice"}
                                        onChange={(e) => setOrderInfo({
                                            ...orderInfo,
                                            paymentMethod: e.target.value
                                        } as OrderInfo)}
                                    />
                                </li>
                            </ul>
                            {orderInfo.paymentMethod === "credit_card" && <CardDetails/>}
                            {orderInfo.paymentMethod === "mobile_pay" && <PhoneDetails/>}
                            {orderInfo.paymentMethod === "gift_card" && <GiftDetails/>}
                            {orderInfo.paymentMethod === "invoice" && <InvoiceDetails/>}
                        </div>
                    </fieldset>
                    <fieldset className="form-section">
                        <legend>Preferences</legend>
                        <div className="form-control-group checkbox-group">
                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                onChange={handleTermsChange}
                                checked={hasAgreedToTerms}
                                required
                            />
                            <label htmlFor="terms">
                                I agree to the{" "}
                                <a href="/terms-and-conditions" target="_blank">
                                    Terms and Conditions
                                </a>
                            </label>
                        </div>

                        <div className="form-control-group checkbox-group">
                            <input
                                type="checkbox"
                                id="mails"
                                name="mails"
                                onChange={handleMailsChange}
                                checked={hasAgreedToMails}
                            />
                            <label htmlFor="mails">I want to receive marketing mails</label>
                        </div>

                        <div className="form-control-group">
                            <label htmlFor="userMessage">Additional messages:</label>
                            <textarea
                                id="userMessage"
                                name="userMessage"
                                className="form-control"
                                placeholder="Enter any message here..."
                                value={userMessage}
                                onChange={(e) => setUserMessage(e.target.value)}
                            ></textarea>
                        </div>
                    </fieldset>
                    <p className="button">
                        <button onClick={() => navigate("/basket/summary")} className="submit-btn">
                            Continue
                        </button>
                    </p>
                </div>

            </form>


        </div>
    );
}
