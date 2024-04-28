import './TotalPriceBox.css'
import { useNavigate } from "react-router-dom";

function TotalPriceBox(props : {prices: number[]}) {
    const navigate = useNavigate();

    return (
        <div className="TotalpriceBox">
            <div className="textBoxPriceBox">
                <p className="headlinePriceBox">
                    Total price
                </p>
                <p className="text">
                    Subtotal
                </p>
                <p className="text">
                    Discount
                </p>
                <p className="text">
                    Delivery
                </p>
                <p className="priceleft">
                    Total
                </p>
                <button className="checkoutbutton" onClick={() => navigate("/basket/payment")}>
                    Checkout
                </button>
            </div>
            <div className="textBoxPriceBox">

                <p className="textright">
                    $ {props.prices[1]}
                </p>
                <p className="discountText">
                    $ {(props.prices[3]*-1).toFixed(2)}
                </p>
                <p className="textright">
                    $ {props.prices[0]}
                </p>
                <p className="price">
                    $ {props.prices[2]}
                </p>
            </div>

        </div>
    )
}

export default TotalPriceBox
