import './CheckoutCard.css'
import {useState} from "react";
import {DetailedBasketItem} from "../interfaces/BasketItem.ts";



function CheckoutCard(props : {basketItem : DetailedBasketItem, updateBasketItem : (item : DetailedBasketItem) => void}) {

    /*
    const [amount, setAmount] = useState(props.basketItem.quantity);
    */
    const card = props.basketItem.card;
    let price : number | string = "-";
    if(card.cardmarket?.prices.averageSellPrice != undefined){
        price =  (card.cardmarket.prices.averageSellPrice * props.basketItem.quantity).toFixed(2)

    }

    /*
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setAmount(Number(event.target.value));
    };
    */

    const updateItemQuantity = (newQuantity : number) => {
        const newItem = props.basketItem
        newItem.quantity = newQuantity
        props.updateBasketItem(newItem)
    }


    return (
        <div className="box">
            <div className="imgBox">
                <img src={card.images == undefined ? "-" : card.images.small} className="pokemonImg"
                     alt={card.name}/>
            </div>

            <div className="textBox">
                <p className="headline">
                    Name
                </p>
                <p>
                    {card.name}
                </p>
                <p className="headline">
                    Set
                </p>
                <p>

                    {card.set == undefined? "-" : card.set.name }
                </p>
                <p className="headline">
                    Rarity
                </p>
                <p>
                    {card.rarity}
                </p>
            </div>
            <div className="textBox">
                <select onChange={ e => {updateItemQuantity(parseInt(e.target.value))}} value={props.basketItem.quantity}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <p>
                    $ {price}
                </p>
            </div>
        </div>
    )
}

export default CheckoutCard
