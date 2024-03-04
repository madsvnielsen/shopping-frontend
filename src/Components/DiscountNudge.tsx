import { Component } from 'react';
import './DiscountNudge.css';

interface DiscountNudgeProps {
    subTotal: number;
}

export default class DiscountNudge extends Component<DiscountNudgeProps> {
    render() {
        const { subTotal } = this.props;
        const discountEligible: number = 44; // 44 is the minimum amount to be eligible for discount
        const amountRemaining = discountEligible - subTotal;

        return (
            <div className="discountNudgeContainer">
                {subTotal < discountEligible ? (
                    <p className="discountMessage">Add ${amountRemaining.toFixed(2)} more to your cart to get a 10% discount on your entire order!</p>
                ) : (
                    <p className="discountMessage">Congratulations! You qualify for a 10% discount on your entire order.</p>
                )}
            </div>
        );
    }
}
