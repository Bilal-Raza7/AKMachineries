import React from "react";
import './testimonials.css'
import img from '../../../images/testi-img.jpg'

function TestiCard() {
  return (
    <div className="outer-testi-Card">
      <div className="testi-card-body">
        <div className="test-card-img-body">
            <img className="test-card-img" src={img} alt="33ci3" />
        </div>
        <div className="testi-card-text">
            <h3 className="test-card-tittle">Your Name</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur</p>
        </div>
      </div>
    </div>
  );
}

export default TestiCard;
