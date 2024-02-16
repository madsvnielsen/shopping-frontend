import './ShoppingCart.css'
import CheckoutCard from "./CheckoutCard.tsx";
import {useEffect, useState} from "react";
import {Card} from "../interfaces/Card.tsx";
import {PokemonAPI} from "../PokemonAPI.ts";


function ShoppingCart() {

    const [card, setCard] = useState<Card>({} as Card);


    useEffect(() => {
            PokemonAPI.getCard("xy1-1").then(
                (data : Card) => {
                    console.log(data)
                    setCard(data)
                }
            )
        }
        , [])

    return (
        <>
            <h1>Your shopping cart</h1>
            <div className="Wrapper">
                <CheckoutCard card={card}/>
                <CheckoutCard card={card}/>
                <CheckoutCard card={card}/>
            </div>
        </>
    )
}

export default ShoppingCart
