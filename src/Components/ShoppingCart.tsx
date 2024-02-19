import './ShoppingCart.css'
import CheckoutCard from "./CheckoutCard.tsx";
import {useEffect, useState} from "react";
import {Card} from "../interfaces/Card.tsx";
import {PokemonAPI} from "../PokemonAPI.ts";


function ShoppingCart(props : {cardIDs: string[]}) {


    const [cards, setCards] = useState<Card[]>([]);

    const addCard = (newCard : Card[]) => {
        setCards(newCard);
    };


    useEffect(() => {
        Promise.all(
            props.cardIDs.map((cardID) => PokemonAPI.getCard(cardID))
        ).then((cards) => {
            addCard(cards);
        });
    }, []);


    return (
        <>
            <h1>Your shopping cart</h1>
            <div className="Wrapper">
                {cards.map((card, index) => (
                    <CheckoutCard key={index} card={card} />
                ))}
            </div>
        </>
    )
}

export default ShoppingCart
