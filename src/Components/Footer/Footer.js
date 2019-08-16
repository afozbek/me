import React from "react";

import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__buttons">
                <button>Who Am I</button>
            </div>
            <div className="footer__short">
                <p>
                    Hi! I am Furkan
                    <span role="img" aria-label="hi">
                        🖐🏻
                    </span>
                </p>
                <p>
                    I'm a software developer who likes to solve my problems with
                    code. My overall goal is to build performance systems and
                    develop stable applications.
                </p>
                <p>
                    I am interested in web technologies and develop projects in
                    this field. I am especially familiar with
                    <strong> Reactjs, Reduxjs and Nodejs.</strong>
                </p>
            </div>
        </div>
    );
};

export default Footer;
