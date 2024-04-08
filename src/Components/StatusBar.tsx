// src/components/StatusBar.tsx
import './StatusBar.css';
import { useNavigate } from "react-router-dom";


const StatusBar = (props : {activeStep : number}) => {

    const navigate = useNavigate();

    // State to keep track of the active step
    
    /*
    const [activeStep, setActiveStep] = useState<number>(1);
    */
   const activeStep = props.activeStep

    const handleStepClick = (step: number) => {
        switch(step){
            case 1:
                navigate("/basket")
                break
            case 2: 
                navigate("/basket/payment")
                break
            case 3:
                navigate("/basket/summary")
                break
            default:
                break

        }
    };
    

    return (
        <ul className="unordered">
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
