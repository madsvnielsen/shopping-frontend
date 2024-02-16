import {PokemonAPI} from "./PokemonAPI";
import { useState, useEffect } from 'react';
import './App.css'
import {Card} from "./interfaces/Card.tsx";


function App() {

    const [card, setCard] = useState<Card>({} as Card);


    useEffect(() => {
            PokemonAPI.getCard("base1-2").then(
                (data : Card) => {
                    console.log(data)
                    setCard(data)
                }
            )
        }
        , [])

  return (
    <>
        <h1>{card.name}</h1>
    </>
  )
}

export default App
