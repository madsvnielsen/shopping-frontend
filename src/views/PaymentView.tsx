import Banner from "../Components/Banner";
import StatusBar from "../Components/StatusBar";
import { ICity } from "../interfaces/ICity";
import { CityAPI } from '../CityAPI';
import './PaymentView.css';

export function PaymentView() {

    //const [isChecked, setIsChecked] = useState();
    function handlePaymentChoice() {}

    async function ValidateZip(value: string) {
        const newCity : ICity[] = await CityAPI.getCity()
        const result = newCity.find((a)=> a.nr.toString() === value)
        
        if (result) {
            //console.log(newCity)
        }
        

    }
    
    return (
        <div>
            <Banner goToBasket={false}/>
            <StatusBar activeStep={2}/> 
            <form action="handle_submit_form" className="form-container" method="post">
                <fieldset>
                    <legend>Billing Information</legend>
                    <div className="form-control-group">
                            <label htmlFor="name">Full name </label>
                            <input className="form-control" type="text" id="name" name="user_name"  required maxLength={65} />
                            <label htmlFor="comp_name">Company name </label>
                            <input className="form-control" type="text" id="comp_name" name="user_company" maxLength={65} />
                            <label htmlFor="comp_vat">Company VAT</label>
                            <input className="form-control" type="number" id="comp_vat" name="user_companyvat" pattern="[0-9]{8}" />
                            <label htmlFor="phone">Phone </label>
                            <input className="form-control" type="tel" id="phone" name="user_phone" pattern="[1-9]{1}[0-9]{7}" />
                            <label htmlFor="mail">Email </label>
                            <input className="form-control" type="email" id="mail" name="user_email" pattern="^[\w-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$" required />
                        
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Delivery address</legend>
                    <div className="form-control-group">
                            <label htmlFor="country">Country </label>
                            <select className="form-control" id="country" name="user_country" autoFocus>
                                <option selected>Denmark</option>
                            </select>
                            <label htmlFor="address1">Street address </label>
                            <input className="form-control" type="text" id="address1" name="user_address1" required maxLength={65} />
                            <input className="form-control" type="text" id="address2" name="user_address2" maxLength={65} />
                            <label htmlFor="zip">Postal code </label>
                            <input className="form-control" type="number" id="zip" name="user_zip" pattern="[1-9]{1}[0-9]{3}" required 
                                onChange={e => ValidateZip(e.target.value)}/*TODO: match against https://api.dataforsyningen.dk/postnumre*/
                                />
                            <label htmlFor="city">City </label>
                            <input className="form-control" type="text" id="city" name="user_city" /*TODO: Provide automatically from zip*/ /> 
                        Is delivery address and billing address the same?
                        <ul className="form-select-group">
                            <li className="form-select">
                                <label htmlFor="same_address">Yes</label>
                                <input className="form-control" type="radio" id="same_address" name="address" value="same_address" checked={true} />
                            </li>
                            <li className="form-select">
                                <label htmlFor="notsame_address">No</label>
                                <input className="form-control" type="radio" id="notsame_address" name="address" value="notsame_address" />
                            </li>
                        </ul>
                    </div>
                </fieldset>


                <fieldset>
                    <legend>Payment method</legend>
                    <div className="form-control-group">
                        <ul className="form-select-group">
                            <li className="form-select">
                                <label htmlFor="credit_card">Credit card</label>
                                <input className="form-control" type="radio" id="credit_card" name="payment_option" value="credit_card" 
                                    onChange={handlePaymentChoice}/>
                            </li>
                            <li className="form-select">
                                <label htmlFor="mobile_pay">Mobile Pay</label>
                                <input className="form-control" type="radio" id="mobile_pay" name="payment_option" value="mobile_pay" />
                            </li>
                            <li className="form-select">
                                <label htmlFor="gift_card">Gift card</label>
                                <input className="form-control" type="radio" id="gift_card" name="payment_option" value="gift_card" />
                            </li>
                        </ul>
                            <label htmlFor="card_no">Card Number </label>
                            <input className="form-control" type="text" id="card_no" name="user_card" required pattern="[0-9]{16}" />
                            <label htmlFor="exp_date">Exp. date </label>
                            <input className="form-control" type="text" id="exp_date" name="user_expdate" required pattern="[0-3]{1}[0-9]{1}[0-1]{1}[0-9]{5}" />
                            <label htmlFor="card_cvv">CVV </label>
                            <input className="form-control" type="text" id="card_cvv" name="user_cardcvv" required pattern="[0-9]{3}" />
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