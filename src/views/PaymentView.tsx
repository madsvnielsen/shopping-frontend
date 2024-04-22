import Banner from "../Components/Banner";
import './PaymentView.css';
import React, {useState} from 'react';
import CardDetails from "../Components/CardDetails.tsx";
import PhoneDetails from "../Components/PhoneDetails.tsx";
import GiftDetails from "../Components/GiftDetails.tsx";
import StatusBar from "../Components/StatusBar.tsx";
import InvoiceDetails from "../Components/InvoiceDetails.tsx";
import AddressForm from "../Components/AddressForm.tsx";

    
export function PaymentView() {

    const [paymentOption, setPaymentOption] = useState('credit_card'); // Default payment option

    const handlePaymentChoice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentOption(event.target.value);
    };

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

    const [userMessage, setUserMessage] = useState('');


    return (
        <div>
            <Banner goToBasket={false}/>
            <StatusBar activeStep={2}/>
            <form action="handle_submit_form" className="form-container" method="post">
                <fieldset>
                    <legend>Billing Information</legend>
                    <div className="form-control-group">
                        <label htmlFor="name">Full name </label>
                        <input className="form-control" type="text" id="name" name="user_name" required maxLength={65}/>
                        <label htmlFor="phone">Phone </label>
                        <input className="form-control" type="tel" id="phone" name="user_phone" required
                               pattern="[1-9]{1}[0-9]{7}"/>
                        <label htmlFor="mail">Email </label>
                        <input className="form-control" type="email" id="mail" name="user_email" required
                               pattern="^[\w-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$"/>

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
                
                    {deliveryAddress && 
                        (<fieldset>
                            <legend>Delivery address</legend>
                            <AddressForm/>
                            </fieldset>
                        )
                    }
                
                <div>
                    <fieldset>
                        <legend>Payment method</legend>
                        <div className="form-control-group">
                            <ul className="form-select-group">
                                <li className="form-select">
                                    <label htmlFor="credit_card">Credit card</label>
                                    <input className="form-control" type="radio" id="credit_card" name="payment_option"
                                           value="credit_card"
                                           checked={paymentOption === 'credit_card'}
                                           onChange={handlePaymentChoice}/>
                                </li>
                                <li className="form-select">
                                    <label htmlFor="mobile_pay">Mobile Pay</label>
                                    <input className="form-control" type="radio" id="mobile_pay" name="payment_option"
                                           value="mobile_pay"
                                           checked={paymentOption === 'mobile_pay'}
                                           onChange={handlePaymentChoice}/>

                                </li>
                                <li className="form-select">
                                    <label htmlFor="gift_card">Gift card</label>
                                    <input className="form-control" type="radio" id="gift_card" name="payment_option"
                                           value="gift_card"
                                           checked={paymentOption === 'gift_card'}
                                           onChange={handlePaymentChoice}/>
                                </li>
                                <li className="form-select">
                                    <label htmlFor="invoice">Invoice</label>
                                    <input className="form-control" type="radio" id="invoice" name="payment_option"
                                           value="invoice"
                                           checked={paymentOption === 'invoice'}
                                           onChange={handlePaymentChoice}/>
                                </li>
                            </ul>
                            {paymentOption === 'credit_card' && <CardDetails/>}
                            {paymentOption === 'mobile_pay' && <PhoneDetails/>}
                            {paymentOption === 'gift_card' && <GiftDetails/>}
                            {paymentOption === 'invoice' && <InvoiceDetails/>}

                        </div>
                    </fieldset>
                </div>
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
                        <label htmlFor="terms">I agree to the <a href="/terms-and-conditions" target="_blank">Terms
                            and
                            Conditions</a></label>
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
                <div className="form-control-group">
                    <p className="button">
                        <button type="submit" className="submit-btn">Continue</button>
                    </p>
                </div>
            </form>
        </div>
    );
}

