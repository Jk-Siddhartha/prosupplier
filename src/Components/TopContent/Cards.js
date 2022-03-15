import React from 'react';
import Card from "./Card";

const Cards = () => {
  return (
      <>
        <div className="cards">
            <Card src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            <Card src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            <Card src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        </div>
      </>
  );
};

export default Cards;
