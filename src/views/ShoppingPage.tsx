import Banner from "../Components/Banner.tsx";
import CardComponent from "../Components/CardComponent.tsx";
import {PokemonAPI} from "../PokemonAPI.ts";
import {useEffect, useState} from "react";
import CardList from "../Components/CardList.tsx";


export function ShoppingPage(){
    const [cards, setCards] = useState([] as CardComponent[])

    useEffect(() => {
        async function getCards () {
        const result: CardComponent[] = await PokemonAPI.listOfCards()
            setCards(result)
    }
    getCards()
    }, []);
    return(
        <div style={{width: "100%"}}>
            <Banner/>{/*
            {cards.length>0 && <CardComponent cards={cards}/>}
            */}
           <CardList cards={cards}/>
        </div>
    )
}