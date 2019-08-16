import React from "react";

const Link = props => {
    return (
        <a
            className="social-links__link"
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {props.children}
        </a>
    );
};

export default Link;
