import './Banner.css'
import pokelogo from "../assets/pokeball.png"

function Banner( props : {goToBasket : boolean}){

    return(
        <div className="Banner">
            <div style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <img src={pokelogo} alt="Pokeball" height="80"/>
            </div>
            <h1 style={{paddingLeft: 20}}>Pokemonshop.com</h1>
            {/*  <a href={props.goToBasket ? "/basket" : "/"} style={{marginLeft: "auto", marginRight: 50}}>
                {props.goToBasket ? "Go to basket" : "Go to products"}
            </a>*/}
            <a href={props.goToBasket ? "/search" : "/"} style={{marginLeft: "auto", marginRight: 50}}>
                {props.goToBasket ? "Go to search" : "Go to products"}
            </a>
        </div>

    )
}

export default Banner
