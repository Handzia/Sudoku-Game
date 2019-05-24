import React from 'react';
import './css/Alert.css';


const Alert = (props) => {
    
    if (props.showAlert) {
        return (
            <div className="Overlay">
                <div className="Alert">
                    <p className="Alert-text">{props.alertText}</p>
                    <button 
                        className="Close-button"
                        onClick={props.hideAlert}
                    ></button>
                </div>
            </div>
        )
    } else {
    return (
        <div>
            puste
        </div>
    )}
};

export default Alert;