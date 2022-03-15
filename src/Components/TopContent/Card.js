import React from 'react';

const Card = (props) => {
  return (
        <div className="card">
            <img
            src = {props.src}
            alt="" 
            className="card-img" />
            <div className="card-text">
              <h3>Computer Science Engineering</h3>
              <p>
                Computer Science Engineering is the branch of B.Tech(Bachelor Of
                Technology) in which Computer fundamental are taught. This
                course is offered by many Institutions as well as University
              </p>
              <span className="btn">Get Resources</span>
            </div>
        </div>
  );
};

export default Card;
