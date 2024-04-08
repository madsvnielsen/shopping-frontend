import quantDiscount from "./QuantDiscount.ts";
import {DetailedBasketItem} from "../interfaces/BasketItem.ts";
function PriceCalculator(props : {basketItems: DetailedBasketItem[], updateBasketItem : (item : DetailedBasketItem) => void}){
    const deliveryFee : number = 2;
    let discount : number = 0
    let subTotal : number = 0;
    let discount2 : number = 0;



    if(props.basketItems.length >0){
        subTotal = parseFloat(props.basketItems.flatMap(item => item.quantity * (item.card.cardmarket.prices.averageSellPrice as number))
            .reduce((a,b,) => a+b).toFixed(2))
    }

    if (props.basketItems.length>0){
        discount2 = parseFloat(props.basketItems.flatMap(item => quantDiscount({ basketItem: item, updateBasketItem: props.updateBasketItem })).reduce((a, b) => a + b).toFixed(2));
    }
    if (subTotal >= 44) {
        discount = parseFloat((subTotal*0.1).toFixed(2))
    }

    discount += discount2;
    const total : number  = parseFloat((subTotal-discount+deliveryFee).toFixed(2));

    const prices: number[] = [deliveryFee, subTotal, total, discount]


    return prices
}

export default PriceCalculator