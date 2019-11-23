import React from "react";

import profileImage from "../../assets/images/furkan-ozbek.jpg";
import { jobTitle, name } from "../../data/data.json";

const Header = () => {
  return (
    <header className="header">
      <div className="header__img">
        <img src={profileImage} alt="furkan-ozbek" />
      </div>

      <div className="header__desc">
        <h1>{name}</h1>
        <h3>{jobTitle}</h3>
      </div>
    </header>
  );
};

export default Header;
