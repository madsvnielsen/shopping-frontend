
import React, { useState } from 'react';
import './App.css'

type Step = {
    number: number;
    title: string;
};

const steps: Step[] = [
    { number: 1, title: 'Information' },
    { number: 2, title: 'Payment' },
    { number: 3, title: 'Summary' },
    { number: 4, title: 'Receipt' },
];

const CheckoutStatusBar: React.FC = () => {
    const [activeStep, setActiveStep] = useState<number>(1);

    return(
        <div className="status-bar">
            {steps.map((step) => (
                <div
                    key={step.number}
                    className={`step ${activeStep === step.number ? 'active' : ''}`}
                    onClick={() => setActiveStep(step.number)}
                >
                    <div className="step-number">{step.number}</div>
                    <div className="step-title">{step.title}</div>
                </div>
            ))}
        </div>
    );
};

function App() {
    return (
        <div>
            <h1>Pokemonshop</h1>
            <CheckoutStatusBar />
            {}
        </div>
    );
}

export default App
