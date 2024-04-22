import './ShoppingCart.css'
import CheckoutCard from "./CheckoutCard.tsx";
import {DetailedBasketItem} from "../interfaces/BasketItem";
import TotalPriceBox from "./TotalPriceBox.tsx";
import DiscountNudge from './DiscountNudge.tsx';
import PriceCalculator from "../HelperFunction/PriceCalculator.ts";
import { BasketContext } from '../App.tsx';
import { useContext } from 'react';


function ShoppingCart(props : {basketItems: DetailedBasketItem[], updateBasketItem : (item : DetailedBasketItem) => void}) {

    const prices = PriceCalculator({basketItems: props.basketItems, updateBasketItem: props.updateBasketItem});
    
    const { basket } = useContext(BasketContext);


    return (
        <div style={{padding: 15}}>
            <h1>Your shopping cart</h1>
            <DiscountNudge subTotal={prices[1]} />
            <div style={{display:"flex"}}>

            <div className="Wrapper">
                {basket.map((basketItem, index) => (
                    <CheckoutCard key={index} basketItem={basketItem} updateBasketItem={props.updateBasketItem} />
                ))}
            </div>

            <TotalPriceBox prices={prices}/>
            </div>
        </div>
    )
}

export default ShoppingCart
