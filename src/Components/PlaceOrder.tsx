import PlaceOrderFunc from "../HelperFunction/PlaceOrderFunc.tsx";
import './PlaceOrder.css';
function PlaceOrder(){
    return(
        <div className="placerOrderBox">
            <button onClick={() => PlaceOrderFunc("placeHolder", "Placeholder")} className="placeOrderButton">
                Place Order
            </button>
        </div>
    )
}

export default PlaceOrder
