import React from "react";
import Link from "../../Links/Link/Link";

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
        I am a front end developer who likes to solve my problems with code. My
        overall goal is to build performance systems and to develop stable
        applications.
      </p>
      <p>
        I am interested in web technologies and develop projects in this field.
        I am especially familiar with {""}
        <Link href="https://reactjs.org/">React</Link>{" "}
        <span role="img" aria-label="react">
          ⚛️
        </span>
        {", "}
        <Link href="https://vuejs.org/">Vue</Link>
        {", "}
        <Link href="https://redux.js.org/">Redux</Link> and{" "}
        <Link href="https://nodejs.org/en/">Node</Link>.
      </p>
    </div>
  );
};

export default ShortMe;
