
import {BasketOverview} from "./views/BasketOverview"
import {ShoppingPage} from "./views/ShoppingPage.tsx";
import {DetailedBasketItem} from "./interfaces/BasketItem.ts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PaymentView } from "./views/PaymentView.tsx";
import {SummaryView} from "./views/SummaryView.tsx";
import { createContext, useState } from "react";




export const BasketContext = createContext({basket: [] as DetailedBasketItem[],  setBasket: (_: DetailedBasketItem[]) => {}});
export const OrderInfoContext = createContext({orderInfo: {} as OrderInfo, setOrderInfo: (_:OrderInfo) => {}})





function App() {

    const [basket, setBasket] = useState([] as DetailedBasketItem[])
    const [orderInfo, setOrderInfo] = useState({
        paymentMethod: "credit_card",
        streetName: "",
        city: "",
        zipCode: "",
        fullName: "",
        phoneNumber: "",
        email: ""
    } as OrderInfo)

    return (
        <BasketContext.Provider value={{basket, setBasket}}>
        <OrderInfoContext.Provider value={{orderInfo, setOrderInfo}}>
    <BrowserRouter>
      <Routes>
        <Route path="/basket/payment" element={<PaymentView/>} />
        <Route path="/basket/summary" element={<SummaryView/>} />
        <Route path="/basket" element={<BasketOverview />} />
        <Route path="/" element={<ShoppingPage/>}/>
      </Routes>
    </BrowserRouter>
    </OrderInfoContext.Provider>
    </BasketContext.Provider>
    )
}

export default App
