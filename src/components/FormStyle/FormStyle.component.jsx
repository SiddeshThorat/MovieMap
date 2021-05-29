import React from 'react';
import './FormStyle.styles.css';

const FormStyle = ({children}) => {
    return(
        <div className="questionSetContainer">
            <div className="innerContainer">
                <div className="formHeader">
                    <span>Enter Details</span>
                </div>
                {children}
            </div>    
        </div> 
    )
}

export default FormStyle;



   