
import {BasketOverview} from "./views/BasketOverview"
import {ShoppingPage} from "./views/ShoppingPage.tsx";
import {BasketItem} from "./interfaces/BasketItem.ts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PaymentView } from "./views/PaymentView.tsx";
import {SummaryView} from "./views/SummaryView.tsx";
import {PokemonAPI} from "./PokemonAPI.ts";

const userBasket: Promise<BasketItem[]> = PokemonAPI.getBasket();


/*
const basketMock : BasketItem[] = [{
    id: "base1-3",
    quantity : 1,
    isLaminated: false
},
    {
        id: "xy1-5",
        quantity : 2,
        isLaminated: false
    },
    {
        id: "base1-2",
        quantity : 1,
        isLaminated: false
    },
    {
        id: "base1-7",
        quantity : 4,
        isLaminated: true
    },
    {
        id: "base2-7",
        quantity : 3,
        isLaminated: false
    },
]

 */

function App() {
    return (
    <BrowserRouter>
      <Routes>
      <Route path="/basket/payment" element={<PaymentView/>} />
          <Route path="/basket/summary" element={<SummaryView/>} />
        <Route path="/basket" element={<BasketOverview basket={userBasket}/>} />
        <Route path="/" element={<ShoppingPage/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    )
}

export default App
