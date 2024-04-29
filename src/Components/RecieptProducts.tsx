import './CheckoutCard.css'
import {DetailedBasketItem} from "../interfaces/BasketItem.ts";
import quantDiscount from "../HelperFunction/QuantDiscount.ts";
import "./RecieptProducts.css"


function RecieptProducts(props: { basketItem: DetailedBasketItem, updateBasketItem: (item: DetailedBasketItem) => void }) {
    const card = props.basketItem.card;
    let price : number | string = "-";
    let discount2 : number | string = "-";
    let totalPrice : number | string = "-";

    if(card.cardmarket?.prices.averageSellPrice != undefined){
        price =  (card.cardmarket.prices.averageSellPrice * props.basketItem.quantity).toFixed(2)
    }

    discount2= quantDiscount({basketItem: props.basketItem, updateBasketItem: props.updateBasketItem})

    totalPrice= parseFloat((parseFloat(price)-discount2).toFixed(2));









    return (
        <div className="productBox">
            <b className="productList">{card.name}, {card.set.name} {props.basketItem.quantity}</b>
            <b className="productList">${totalPrice}</b>
            <div className="line"/>
        </div>
    );

}

export default RecieptProducts
