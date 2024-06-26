import "./Banner.css";
import pokelogo from "../assets/pokeball.png";
import basketIcon from "../assets/basket.png";

function Banner(props: { goToBasket: boolean }) {
  return (
    <div className="Banner">
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img src={pokelogo} alt="Pokeball" height="80" />
      </div>
      <a href="/" className="titleLink">
        <h1 className="title">Pokemonshop.com</h1>
      </a>
      {props.goToBasket && (
        <a href="/basket" className="cartIcon">
          <img src={basketIcon} alt="Basket" height="50" />
        </a>
      )}
      {!props.goToBasket && (
        <a href="/" className="productIcon">
          <p className="goToProdText">Products</p>
        </a>
      )}
    </div>
  );
}

export default Banner;
