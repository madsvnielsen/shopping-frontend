import './CheckoutCard.css'
import cardImage from "../assets/lowrescard.png";
import {useState} from "react";


function CheckoutCard() {

    const unitPrice = 125;
    const [amount, setAmount] = useState(1);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setAmount(Number(event.target.value));
    };

    return (
        <div className="box">
            <img src={cardImage} className="pokemonImg" alt="Pokemon card"/>
            <div className="textBox">
                <p className="headline">
                    Name
                </p>
                <p>
                    Venusaur
                </p>
                <p className="headline">
                    Set
                </p>
                <p>
                    XY
                </p>
                <p className="headline">
                    Rarity
                </p>
                <p>
                    Rare Holo EX
                </p>
            </div>
            <div className="textBox">
                <select onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <p>
                    ${unitPrice * amount}
                </p>
            </div>
        </div>
    )
}

export default CheckoutCard
