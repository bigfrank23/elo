import React from 'react'
import { Carousel } from 'react-bootstrap';
import { cardContent } from '../cardContent';
import ItemSlider from './ItemSlider';
import './ourExpertise.css'

const OurExpertise = () => {
  return (
    <div>
      <div className="container" id="ourExpertise-container">
        <div className="main-header d-flex flex-column align-items-center justify-center">
          <h2>OUR EXPERTISE</h2>
          <span className="seperator"></span>
        </div>
        <div className="row" id="card-wrapper">
          {cardContent.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-img">
                <img src={item.img} alt="" />
              </div>
              <div className="card-title text-center">
                <h5>{item.header}</h5>
              </div>
              <div className="card-text">
                <p>
                  {item.para}
                  <span className="text-danger">Read more</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="last-header d-flex flex-column align-items-center justify-center">
          <h2>SOME OF OUR CLIENTS</h2>
          <span className="seperator"></span>
        </div>
        <>
          <ItemSlider />
        </>
      </div>
    </div>
  );
}

export default OurExpertise