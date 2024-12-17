import React from "react";

import profileImage from "../../assets/images/furkan-ozbek.jpeg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__img">
        <img src={profileImage} alt="furkan-ozbek" />
      </div>

      <div className="header__desc">
        <h1>Abdullah Furkan Özbek</h1>
        <h3>Frontend Engineer</h3>
      </div>
    </header>
  );
};

export default Header;
