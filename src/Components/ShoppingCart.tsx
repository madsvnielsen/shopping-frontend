import './ShoppingCart.css'
import CheckoutCard from "./CheckoutCard.tsx";
import {DetailedBasketItem} from "../interfaces/BasketItem";
import TotalPriceBox from "./TotalPriceBox.tsx";


function ShoppingCart(props : {basketItems: DetailedBasketItem[], updateBasketItem : (item : DetailedBasketItem) => void}) {

    return (
        <div style={{padding: 15}}>
            <h1>Your shopping cart</h1>
            <div style={{display:"flex"}}>

            <div className="Wrapper">
                {props.basketItems.map((basketItem, index) => (
                    <CheckoutCard key={index} basketItem={basketItem} updateBasketItem={props.updateBasketItem} />
                ))}
            </div>

            <TotalPriceBox basketItems={props.basketItems}/>
            </div>
        </div>
    )
}

export default ShoppingCart
