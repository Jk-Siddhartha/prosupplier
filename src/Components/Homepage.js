import React from "react";
import Navbar from "./Navbar";
import IntroDiv from "./IntroDiv/IntroDiv";
import TopContent from "./TopContent/TopContent";
import Feedbacks from "./TopFeedback/Feedbacks";
import Footer from "./FooterDiv/Footer";

const Homepage = () => {
  return (
    <>
    <div className="main-div">
      <Navbar />
      <IntroDiv />
      <TopContent />
      <Feedbacks />
      <Footer />
    </div>
    </>
  );
};

export default Homepage;
