import React from "react";

import Furkan from "../../assets/images/furkan-ozbek.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__img">
        <img src={Furkan} alt="Furkan" />
      </div>

      <div className="header__desc">
        <h1>Abdullah Furkan Özbek</h1>
        <h3>Front End Developer</h3>
      </div>
    </div>
  );
};

export default Header;
