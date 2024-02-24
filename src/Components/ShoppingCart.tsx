import './ShoppingCart.css'
import CheckoutCard from "./CheckoutCard.tsx";
import {DetailedBasketItem} from "../interfaces/BasketItem";


function ShoppingCart(props : {basketItems: DetailedBasketItem[]}) {

    return (
        <>
            <h1>Your shopping cart</h1>
            <div className="Wrapper">
                {props.basketItems.map((basketItem, index) => (
                    <CheckoutCard key={index} basketItem={basketItem} />
                ))}

                <p>This is a checkbox for laminating your card:</p>
                <input 
                    type="checkbox"
                    
                />
            </div>
        </>
    )
}

export default ShoppingCart
