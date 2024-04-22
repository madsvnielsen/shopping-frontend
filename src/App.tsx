
import {BasketOverview} from "./views/BasketOverview"
import {ShoppingPage} from "./views/ShoppingPage.tsx";
import {BasketItem, DetailedBasketItem} from "./interfaces/BasketItem.ts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PaymentView } from "./views/PaymentView.tsx";
import {SummaryView} from "./views/SummaryView.tsx";
import {PokemonAPI} from "./PokemonAPI.ts";
import { createContext, useState } from "react";




export const BasketContext = createContext({basket: [] as DetailedBasketItem[],  setBasket: (_: DetailedBasketItem[]) => {}});






function App() {
    
    const [basket, setBasket] = useState([] as DetailedBasketItem[])

    return (
    <BasketContext.Provider value={{basket, setBasket}}>
    <BrowserRouter>
      <Routes>
        <Route path="/basket/payment" element={<PaymentView/>} />
        <Route path="/basket/summary" element={<SummaryView/>} />
        <Route path="/basket" element={<BasketOverview />} />
        <Route path="/" element={<ShoppingPage/>}/>
      </Routes>
    </BrowserRouter>
    </BasketContext.Provider>
    )
}

export default App
