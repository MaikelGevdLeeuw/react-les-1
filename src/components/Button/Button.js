import React from 'react';

function Button({ children, buttonType, buttonClickHandler }) {
    return (
        <div>
            <button type={buttonType} onClick={buttonClickHandler}>
                {children}
            </button>
        </div>
    );
}

export default Button;
