import './CheckoutCard.css'
import reactLogo from "../assets/lowrescard.png";


function CheckoutCard(){
    return (
        <div className="box">
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
    )
}

export default CheckoutCard
