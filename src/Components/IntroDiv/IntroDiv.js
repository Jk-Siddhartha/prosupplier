import React from "react";
import IntroImg from "./IntroImg";
import IntroText from "./IntroText";

const IntroDiv = () => {
  return (
      <>
        <div className="intro-div">
            <IntroText/>
            <IntroImg/>
        </div>
      </>
  );
};

export default IntroDiv;
