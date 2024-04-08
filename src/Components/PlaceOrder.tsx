import PlaceOrderFunc from "../HelperFunction/PlaceOrderFunc.tsx";
import './PlacerOrder.css';
import './CheckBox.tsx'
import Checkbox from "./CheckBox.tsx";
function PlaceOrder(){


    return(
        <div className="placerOrderBox">
            /*
            <Checkbox label="I agree to the the Terms of service"/>
            <Checkbox label="I agree to recieve news and marketing emails"/>
            */
            <button onClick={() => PlaceOrderFunc("placeHolder", "Placeholder")} className="placeOrderButton">
                Place Order
            </button>
        </div>
    )
}

export default PlaceOrder
