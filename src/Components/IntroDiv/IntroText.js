import React from "react";
import { NavLink } from "react-router-dom";
const IntroText = () => {
  return (
    <>
      <div className="intro-text">
        <h1>
          Welcome to <span>ProSupplier</span>
        </h1>
        <p>
          Confused on which course to take? I have got you covered. Browse
          courses and find out the best course for you. Its free! ProSupplier is
          my attempt to teach basics and those coding techniques to people in
          short time which took me ages to learn.
        </p>
        <div className="btns">
          <NavLink to="/courses" className="btn">
            Free Notes
          </NavLink>
          <NavLink to="/topcontent" className="btn">
            Explore Latest
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default IntroText;
