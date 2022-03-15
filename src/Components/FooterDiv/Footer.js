import React from 'react';
import Copyright from "./Copyright"
import SocialMedia from "./SocialMedia"

const Footer = () => {
  return (
      <>
        <div className="footer">
            <Copyright/>
            <SocialMedia/>
        </div>
      </>
  );
};

export default Footer;
