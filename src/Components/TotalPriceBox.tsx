import './TotalPriceBox.css'
import {DetailedBasketItem} from "../interfaces/BasketItem.ts";


function TotalPriceBox(props : {basketItems: DetailedBasketItem[]}) {

    let deliveryFee = 2;

    let subTotal = 0;

    if(props.basketItems.length > 0){
        subTotal = parseFloat(props.basketItems.flatMap(item => item.quantity * (item.card.cardmarket.prices.averageSellPrice as number))
        .reduce((a,b,) => a+b).toFixed(2))
    }

    let total = (subTotal +deliveryFee).toFixed(2);

    return (
        <div className="TotalpriceBox">

            <div className="textBox">
                <p className="headline">
                    Total price
                </p>
                <p className="text">
                    Subtotal
                </p>
                <p className="text">
                    Delivery
                </p>
                <p className="priceleft">
                    Total
                </p>
                <button className="checkoutbutton">
                    Checkout
                </button>
            </div>
            <div className="textBox">

                <p className="textright">
                    $ {subTotal}
                </p>
                <p className="textright">
                   $ {deliveryFee}
                </p>
                <p className="price">
                    $ {total}
                </p>
            </div>

        </div>
    )
}

export default TotalPriceBox
