// src/components/StatusBar.tsx
import './StatusBar.css';
import {useState} from "react";

const StatusBar = () => {
    // State to keep track of the active step
    const [activeStep, setActiveStep] = useState<number>(1);

    const handleStepClick = (step: number) => {
        setActiveStep(step);
    };

    return (
        <ul>
            <li 
                className={`step ${activeStep === 1 ? 'active' : ''} white`} 
                style={{ marginLeft: '200px' }} 
                onClick={() => handleStepClick(1)}
            >
                <span className="step">1</span>
                <span className="step-text">Information</span>
            </li>
            <li 
                className={`step ${activeStep === 2 ? 'active' : ''} white`} 
                style={{ marginLeft: '120px' }} 
                onClick={() => handleStepClick(2)}
            >
                <span className="step">2</span>
                <span className="step-text">Payment</span>
            </li>
            <li 
                className={`step ${activeStep === 3 ? 'active' : ''} white`} 
                style={{ marginInline: '120px' }} 
                onClick={() => handleStepClick(3)}
            >
                <span className="step">3</span>
                <span className="step-text">Summary</span>
            </li>
            <li 
                className={`step ${activeStep === 4 ? 'active' : ''} white`} 
                style={{ marginRight: '200px' }} 
                onClick={() => handleStepClick(4)}
            >
                <span className="step">4</span>
                <span className="step-text">Receipt</span>
            </li>
        </ul>
    );
};

export default StatusBar;
