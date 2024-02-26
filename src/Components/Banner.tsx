import './Banner.css'
import pokelogo from "../assets/pokeball.png"

function Banner(){

    return(
        <div className="Banner">
        <div style={{height: "100%", display: "flex", flexDirection: "column", justifyContent:"center"}}>
            <img src={pokelogo} height="80"/>
        </div>
            <h1 style={{paddingLeft: 20}}>Pokemonshop.com</h1>
        </div>
    )
}

export default Banner
