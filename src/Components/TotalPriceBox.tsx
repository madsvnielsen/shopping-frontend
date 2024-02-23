import './TotalPriceBox.css'



function TotalPriceBox() {


    return (
        <div className="TotalpriceBox">

            <div className="textBox">
                <p className="headline">
                    Total price
                </p>
                <p>
                    Subtotal \t \t 198
                </p>
                <p>
                    Delivery 2
                </p>
                <p>
                    Total \t \t 200
                </p>
                <button>
                    onPress={true}
                    title="Checkout"
                    color="#C52828"
                </button>
            </div>

        </div>
    )
}

export default TotalPriceBox