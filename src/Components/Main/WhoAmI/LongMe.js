import React from "react";
import Link from "../../Links/Link/Link";

import { socialLinks } from "../../../data/data.json";

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
        I am a 4th year student at Istanbul University Computer Engineering
        Department. Previously, I worked at Vakıf Emeklilik, Rella Media, Zero
        Second and OBSS.
      </p>
      <p>
        I am also supporting{" "}
        <Link href="https://www.freecodecamp.org/">freeCodeCamp</Link> community
        which place that I learn and improve my skills. Among my future plans, I
        would like to create a community, just like freeCodeCamp, and bring
        people together under one idea. I believe that if developers will gladly
        help each other we can improve the dev community much better.
        <span role="img" aria-label="together">
          💪🏻
        </span>
      </p>
      <p>
        I am really loving to develop and build new things. Javascript is my
        passion{" "}
        <span role="img" aria-label="heart">
          🧡
        </span>
        . From the moment I met React, I loved it. That being said, I build most
        of my projects with <Link href="https://reactjs.org/">React</Link>{" "}
        <span role="img" aria-label="react">
          ⚛️
        </span>
      </p>
      <p>
        I love reading articles, learning new technologies, building projects
        and be the part of the{" "}
        <Link href="https://dev.to/">dev tech community</Link> very much!
      </p>
      <p>
        Feel free to <Link href={socialLinks.mailUrl}>contact</Link> me if you
        have any other questions{" "}
        <span role="img" aria-label="ballon">
          🎈
        </span>
      </p>
    </div>
  );
};

export default LongMe;
