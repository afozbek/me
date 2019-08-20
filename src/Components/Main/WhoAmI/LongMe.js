import React from "react";
import Link from "../../Links/Link/Link";

import { socialLinks } from "../../Links/SocialLinks";

const LongMe = () => {
    return (
        <div className="footer__whoAmI">
            <p>
                Hello! My name is Furkan
                <span role="img" aria-label="hi">
                    {" "}
                    👨🏻‍💻
                </span>
            </p>
            <p>
                I am a 4th year student at Istanbul University Computer
                Engineering Department. Previously, I worked at Vakıf Emeklilik,
                Rella Media, Zero Second and OBSS.
            </p>
            <p>
                I am also supporting <strong>freeCodeCamp</strong> community
                which place that I learn and improve my skills. Among my future
                plans, I would like to create a community, just like
                freeCodeCamp, and bring people together under one idea. I
                believe that if developers will gladly help each other we can
                improve the dev community much better.
                <span role="img" aria-label="together">
                    💪🏻
                </span>
            </p>
            <p>
                I love reading articles, learning new technologies, building
                projects and be the part of the <strong>tech community</strong>{" "}
                very much!
            </p>
            <p>
                Feel free to <Link href={socialLinks.mailUrl}>contact</Link> me
                if you have any other questions.
            </p>
        </div>
    );
};

export default LongMe;
