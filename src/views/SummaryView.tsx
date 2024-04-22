import Banner from "../Components/Banner";
import StatusBar from "../Components/StatusBar.tsx";
import PlaceOrder from "../Components/PlaceOrder.tsx";
import { useContext } from "react";
import { OrderInfoContext } from "../App.tsx";
import { PokemonAPI } from "../PokemonAPI.ts";

export function SummaryView() {
    const {orderInfo} = useContext(OrderInfoContext)
    return (
        <div>
            <Banner goToBasket={false}/>
            <StatusBar activeStep={3}/>
            <div style={{padding: 15}}>
                <h2>Order Details</h2>
                <p>Please confirm your order details.</p>
                <ul>
                    <li><strong>Payment Method</strong> {orderInfo.paymentMethod}</li>
                    <li><strong>Street Name</strong> {orderInfo.streetName}</li>
                    <li><strong>City</strong> {orderInfo.city}</li>
                    <li><strong>Zip Code</strong> {orderInfo.zipCode}</li>
                    <li><strong>Full Name</strong> {orderInfo.fullName}</li>
                    <li><strong>Phone Number</strong> {orderInfo.phoneNumber}</li>
                    <li><strong>Email</strong> {orderInfo.email}</li>
                </ul>
                </div>
            <PlaceOrder onClick={() => PokemonAPI.postOrder(orderInfo)}/>
        </div>
    );
}