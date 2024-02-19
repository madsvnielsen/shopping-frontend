import './CheckoutCard.css'
import {useState} from "react";
import {Card} from "../interfaces/Card.tsx";


function CheckoutCard(props: { card: Card }) {

    const [amount, setAmount] = useState(1);
    let price: number | string = "-"
    if (props.card.cardmarket?.prices.averageSellPrice != undefined) {
        price = (props.card.cardmarket.prices.averageSellPrice * amount).toFixed(2)

    }


    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setAmount(Number(event.target.value));
    };


    return (
        <div className="box">
            <div className="imgBox">
                <img src={props.card.images == undefined ? "-" : props.card.images.small} className="pokemonImg"
                     alt={props.card.name}/>
            </div>
            <div className="textBox">
                <p className="headline">
                    Name
                </p>
                <p>
                    {props.card.name}
                </p>
                <p className="headline">
                    Set
                </p>
                <p>
                    {props.card.set == undefined ? "-" : props.card.set.name}
                </p>
                <p className="headline">
                    Rarity
                </p>
                <p>
                    {props.card.rarity}
                </p>
            </div>
            <div className="textBox">
                <select onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <p>
                    $ {price}
                </p>
            </div>
        </div>
    )
}

export default CheckoutCard
