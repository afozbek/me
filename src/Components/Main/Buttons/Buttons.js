import React from "react";

const Buttons = props => {
    return (
        <div className="footer__buttons">
            <button
                className="sm-margin-right"
                onClick={() => props.shortMeClickHandler()}
            >
                Short Me
            </button>
            <button
                className="sm-margin-right"
                onClick={() => props.longMeClickHandler()}
            >
                Long Me
            </button>
        </div>
    );
};

export default Buttons;
