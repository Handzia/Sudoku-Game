import React from 'react';
import './css/Alert.css';


const Alert = ({showAlert, alertText, hideAlert}) => {
    
    if (showAlert) {
        return (
            <div className="Overlay">
                <div className="Alert">
                    <p className="Alert-text">{alertText}</p>
                    <button 
                        className="Close-button"
                        onClick={hideAlert}
                    ></button>
                </div>
            </div>
        )
    } else {return <div></div>}
};

export default Alert;