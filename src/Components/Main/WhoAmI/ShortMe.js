import React from "react";
import Link from "../../Links/Link/Link";
import { socialLinks } from "../../../util/constants";

const ShortMe = () => {
  return (
    <div className="footer__whoAmI">
      <p>
        Hi! I am Furkan
        <span role="img" aria-label="hi">
          {" "}
          ✋🏻
        </span>
      </p>
      <p>
        I am a frontend engineer over 5 years of experience. I built more than
        50 different project with React, Vue, Angular & Next.js.
      </p>
      <p>
        I like to build small side projects to have fun and learn new things.
      </p>
      <p>
        Check out my projects on my{" "}
        <Link href={socialLinks.githubUrl} target="_blank">
          {" "}
          Github
        </Link>
      </p>
    </div>
  );
};

export default ShortMe;
