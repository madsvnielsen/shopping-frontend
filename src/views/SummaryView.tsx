import Banner from "../Components/Banner";
import StatusBar from "../Components/StatusBar.tsx";
import PlaceOrder from "../Components/PlaceOrder.tsx";
import {useContext} from "react";
import {OrderInfoContext} from "../App.tsx";
import {PokemonAPI} from "../PokemonAPI.ts";
import './SummaryViewCSS.css'
import {useNavigate} from "react-router-dom";

export function SummaryView() {
    const {orderInfo, setOrderInfo} = useContext(OrderInfoContext)
    const navigate = useNavigate()
    async function handleOrder(){
        const data : {Order : string} = await PokemonAPI.postOrder(orderInfo)
        setOrderInfo({...orderInfo,ordernumber: data.Order})
        navigate("/basket/reciept")
    }
    return (
        <div className="shopPage">
            <Banner goToBasket={false}/>
            <StatusBar activeStep={3}/>
            <div style={{padding: 15}}>
                <h1>Order Details</h1>
                <p>Please confirm your order details.</p>
                <div className="listWrapper">
                    <ul className="sumList">
                        <li className="listElement"><strong>Payment Method</strong> {orderInfo.paymentMethod}</li>
                        <li className="listElement"><strong>Street Name</strong> {orderInfo.streetName}</li>
                    </ul>
                    <ul className="sumList">
                        <li className="listElement"><strong>City</strong> {orderInfo.city}</li>
                        <li className="listElement"><strong>Zip Code</strong> {orderInfo.zipCode}</li>
                    </ul>
                    <ul className="sumList">
                        <li className="listElement"><strong>Full Name</strong> {orderInfo.fullName}</li>
                        <li className="listElement"><strong>Phone Number</strong> {orderInfo.phoneNumber}</li>
                    </ul>
                    <ul className="sumList">
                        <li className="listElement"><strong>Email</strong> {orderInfo.email}</li>
                        <li className="listElement"><strong>Order total</strong> {orderInfo.totalPrice} $</li>
                    </ul>

                </div>
                <PlaceOrder onClick={() => handleOrder()}/>
            </div>
        </div>
    );
}