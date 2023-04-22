import React from "react";
import Fade from "react-reveal";
const Description = () => {
  return (
    <Fade>
      <div className="center_wrapper">
        <h2>Hightlights</h2>
        <div className="highlight_description">
          In the following example, we demonstrate how to use react-window with
          the List component. It renders 200 rows and can easily handle more.
          Virtualization helps with performance issues.
        </div>
      </div>
    </Fade>
  );
};

export default Description;
