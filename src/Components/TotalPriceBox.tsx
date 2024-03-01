import './TotalPriceBox.css'


function TotalPriceBox(props : {prices: number[]}) {



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
                <button className="checkoutbutton">
                    Checkout
                </button>
            </div>
            <div className="textBoxPriceBox">

                <p className="textright">
                    $ {props.prices[1]}
                </p>
                <p className="discountText">
                    $ {props.prices[3]*-1}
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
