import Banner from "../Components/Banner.tsx";
import CardList from "../Components/CardList.tsx";
import {PokemonAPI} from "../PokemonAPI.ts";
import {Card} from "../interfaces/Card.tsx";
import {useEffect, useState} from "react";


export function ShoppingPage(){
    const [cards, setCards] = useState([] as Card[])

    useEffect(() => {
        async function getCards () {
        const result: Card[] = await PokemonAPI.listOfCards()
            setCards(result)
    }
    getCards()
    }, []);
    return(
        <div style={{width: "100%"}}>
            <Banner/>
            {cards.length>0 && <CardList cards={cards}/>}
        </div>
    )
}