import Banner from "../Components/Banner";
import './PaymentView.css';
import StatusBar from "../Components/StatusBar.tsx";
import PlaceOrder from "../Components/PlaceOrder.tsx";

export function SummaryView() {
    return (
        <div>
            <Banner goToBasket={false}/>
            <StatusBar activeStep={3}/>
            <PlaceOrder/>
        </div>
    );
}