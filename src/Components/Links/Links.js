import React from "react";
import Link from "./Link/Link";

import "./Links.css";

const Links = () => {
    return (
        <div className="social-links">
            <Link href="#">Twitter</Link>
            <Link href="#">Github</Link>
            <Link href="#">Linkedin</Link>
            <Link href="#">Codepen</Link>
        </div>
    );
};

export default Links;
