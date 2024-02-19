import ShoppingCart from "./Components/ShoppingCart.tsx";
import Banner from "./Components/Banner.tsx";

function App() {


    return (
        <div style={{width: "100%"}}>
            <Banner/>
            <ShoppingCart cardIDs={["base1-3", "xy1-5", "sv4-27"]}/>
        </div>
    )
}

export default App
