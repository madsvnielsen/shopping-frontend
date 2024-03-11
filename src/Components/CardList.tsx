import {Card} from "../interfaces/Card.tsx";


function CardList(props: {cards: Card[]}){




    return(
        <div>
                {props.cards.map((card: Card)   => <img src={card.images == undefined ? "-" : card.images.small} className="pokemonImg"
                                        alt={card.name}/>)}


        </div>

    )
}

export default CardList