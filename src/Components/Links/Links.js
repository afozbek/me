import React from "react";
import Link from "./Link/Link";
import { socialLinks } from "../../util/constants";

const Links = () => {
  const { githubUrl, twitterUrl, linkedinUrl, codepenUrl, mailUrl, devUrl } =
    socialLinks;

  return (
    <div className="social-links">
      <Link href={twitterUrl}>Twitter</Link>
      <Link href={githubUrl}>Github</Link>
      <Link href={linkedinUrl}>Linkedin</Link>
      <Link href={codepenUrl}>Codepen</Link>
      <Link href={devUrl}>Dev</Link>
      <Link href={mailUrl}>Email</Link>
    </div>
  );
};

export default Links;
