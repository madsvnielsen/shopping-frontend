import {useContext} from "react";
import {OrderInfoContext} from "../App.tsx";
import "./RecieptSummary.css"

function RecieptSummary()  {
    const orderInfo = useContext(OrderInfoContext)
    return(

            <div className="RecieptBox">
                OrderNumber: {orderInfo.orderInfo.ordernumber}<br/>
                Email: {orderInfo.orderInfo.email}<br/>
                Phone Number: {orderInfo.orderInfo.phoneNumber}<br/>
                Total: ${orderInfo.orderInfo.totalPrice}<br/>
                Delivery address: {orderInfo.orderInfo.city} {orderInfo.orderInfo.streetName} <br/>
                Payment method: {orderInfo.orderInfo.paymentMethod}<br/>
            </div>


)
}

export default RecieptSummary
