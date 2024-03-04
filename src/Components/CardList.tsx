import {PokemonAPI} from "../PokemonAPI.ts";
import {Card} from "../interfaces/Card.tsx";

function CardList(){

    const cards= PokemonAPI.listOfCards()



    return(
        <div>
            <div className="imgBox">
                {cards.map((card: Card)   => <img src={card.images == undefined ? "-" : card.images.small} className="pokemonImg"
                                        alt={card.name}/>)}
            </div>

        </div>

    )
}

export default CardList