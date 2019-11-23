import React, { useState } from "react";

import ShortMe from "./WhoAmI/ShortMe";
import LongMe from "./WhoAmI/LongMe";
import Buttons from "./Buttons/Buttons";

const Main = () => {
  const [shortMe, longMe, whatILike] = ["shortMe", "longMe", "whatILike"];
  const [clickedButton, setClickedButton] = useState(shortMe);

  const shortMeClickHandler = e => {
    setClickedButton(shortMe);
  };

  const longMeClickHandler = e => {
    setClickedButton(longMe);
  };

  const whatILikeClickHandler = e => {
    setClickedButton(whatILike);
  };

  let renderedContent = <ShortMe />;

  if (clickedButton === longMe) {
    renderedContent = <LongMe />;
  }

  return (
    <div className="footer">
      <Buttons
        shortMeClickHandler={shortMeClickHandler}
        longMeClickHandler={longMeClickHandler}
        whatILikeClickHandler={whatILikeClickHandler}
      />
      {renderedContent}
    </div>
  );
};

export default Main;
