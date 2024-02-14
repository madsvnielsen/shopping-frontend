import './ShoppingCart.css'
import CheckoutCard from "./CheckoutCard.tsx";

function ShoppingCart() {

    return (
        <>
            <h1>Your shopping cart</h1>
            <div className="Wrapper">
                <CheckoutCard/>
                <CheckoutCard/>
                <CheckoutCard/>
                <CheckoutCard/>
                <CheckoutCard/>
                <CheckoutCard/>
            </div>
        </>
    )
}

export default ShoppingCart
