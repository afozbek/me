import React from "react";

const Link = props => {
    return (
        <a className="social-links__link" href={props.href}>
            {props.children}
        </a>
    );
};

export default Link;
