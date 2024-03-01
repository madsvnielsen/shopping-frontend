import './ShoppingCart.css'
import CheckoutCard from "./CheckoutCard.tsx";
import {DetailedBasketItem} from "../interfaces/BasketItem";
import TotalPriceBox from "./TotalPriceBox.tsx";


function ShoppingCart(props : {basketItems: DetailedBasketItem[], updateBasketItem : (item : DetailedBasketItem) => void}) {


    const deliveryFee : number = 2;
    let discount : number = 0

    let subTotal : number = 0;

    let total : number = 0;

    if(props.basketItems.length > 0){
        subTotal = parseFloat(props.basketItems.flatMap(item => item.quantity * (item.card.cardmarket.prices.averageSellPrice as number))
            .reduce((a,b,) => a+b).toFixed(2))
    }

    if (subTotal >= 50) {
        discount = parseFloat((subTotal*0.1).toFixed(2))
    }

    total = parseFloat((subTotal-discount+deliveryFee).toFixed(2));


    const prices: number[] = [deliveryFee, subTotal, total, discount]

    return (
        <div style={{padding: 15}}>
            <h1>Your shopping cart</h1>
            <div style={{display:"flex"}}>

            <div className="Wrapper">
                {props.basketItems.map((basketItem, index) => (
                    <CheckoutCard key={index} basketItem={basketItem} updateBasketItem={props.updateBasketItem} />
                ))}
            </div>

            <TotalPriceBox prices={prices}/>
            </div>
        </div>
    )
}

export default ShoppingCart
