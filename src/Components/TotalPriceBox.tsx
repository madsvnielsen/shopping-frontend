import './TotalPriceBox.css'



function TotalPriceBox() {


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
                    $198
                </p>
                <p className="textright">
                   $2
                </p>
                <p className="price">
                    $200
                </p>
            </div>

        </div>
    )
}

export default TotalPriceBox