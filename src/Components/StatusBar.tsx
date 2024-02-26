// src/components/StatusBar.tsx
//import React from 'react';
import './StatusBar.css'; // Adjust the path as necessary

const StatusBar = () => {
    return (
        <ul>
            <li className="step active white" style={{ marginLeft: '200px' }}>
                <span className="step">1</span>
                <span className="step-text">Information</span>
            </li>
            <li className="step white" style={{ marginLeft: '120px' }}>
                <span className="step">2</span>
                <span className="step-text">Payment</span>
            </li>
            <li className="step white" style={{ marginInline: '120px' }}>
                <span className="step">3</span>
                <span className="step-text">Summary</span>
            </li>
            <li className="step white" style={{ marginRight: '200px' }}>
                <span className="step">4</span>
                <span className="step-text">Receipt</span>
            </li>
        </ul>
    );
};

export default StatusBar;
