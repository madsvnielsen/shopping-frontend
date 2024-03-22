import {DetailedBasketItem} from "../interfaces/BasketItem.ts";

function QuantDiscount(props : {basketItem : DetailedBasketItem, updateBasketItem : (item : DetailedBasketItem) => void}) {
    const card = props.basketItem.card;
    let price : number | string = "-";
    let discount =0;
    if(card.cardmarket?.prices.averageSellPrice != undefined){
        price =  (card.cardmarket.prices.averageSellPrice * props.basketItem.quantity).toFixed(2)
    }
    if (props.basketItem.quantity > 3){
        discount = parseFloat((0.1*parseFloat(price)).toFixed(2))
        price = parseFloat((0.9*parseFloat(price)).toFixed(2))
    }
    return discount
}
export default QuantDiscount
