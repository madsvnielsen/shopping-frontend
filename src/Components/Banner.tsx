import './Banner.css'
import pokelogo from "../assets/pokeball.png"
import basketIcon from "../assets/basket.png"

function Banner( props : {goToBasket : boolean}){

    return(
        <div className="Banner">
        <div style={{height: "100%", display: "flex", flexDirection: "column", justifyContent:"center"}}>
            <img src={pokelogo} alt="Pokeball" height="80"/>
        </div>
            <h1 style={{paddingLeft: 20}}>Pokemonshop.com</h1>
            {props.goToBasket && (
                <a href="/basket" style={{ marginLeft: 'auto', marginRight: 50 }}>
                    <img src={basketIcon} alt="Basket" height="30" />
                </a>
            )}
            {!props.goToBasket && (
                <a href="/" style={{ marginLeft: 'auto', marginRight: 50 }}>
                    Go to products
                </a>
                )}
        </div>
    )
}

export default Banner
