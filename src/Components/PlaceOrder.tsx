import './PlaceOrder.css';
function PlaceOrder( props : {onClick : () => {}}){
    return(
        <div className="placerOrderBox">
            <button onClick={props.onClick} className="placeOrderButton">
                Place Order
            </button>
        </div>
    )
}

export default PlaceOrder
