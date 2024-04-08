
import {BasketOverview} from "./views/BasketOverview"
import {ShoppingPage} from "./views/ShoppingPage.tsx";
import {BasketItem} from "./interfaces/BasketItem.ts";

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

function App() {
    return (
        <ShoppingPage/>

    )
}

export default App
