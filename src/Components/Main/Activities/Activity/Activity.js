import React from "react";

const Activity = props => {
  return (
    <li>
      <span role="img" aria-label="option" />
      {props.activityDesc}
    </li>
  );
};

export default Activity;
