import React from 'react'
import './TestimonialSection.css'
import TestimonialSlider from './TestimonialSlider';

const TestimonialSection = () => {
  return (
    <div className="container-fluid" id="testimonial-container">
      <div className="main-title-testimonial">
        <h2>WHAT OTHERS SAY ABOUT US</h2>
      </div>
      <>
        <TestimonialSlider />
      </>
      <div className="bottom-testimonial d-flex justify-content-around">
        <div className="left-bottom">
          <h2>Have a project in mind?</h2>
          <div className="flex-right">
            <i
              className="fa fa-briefcase"
              aria-hidden="true"
              style={{ alignSelf: "center" }}
            />
            <h3 style={{ marginLeft: "5px" }}>request a quote</h3>
          </div>
        </div>
        <div className="right-bottom">
          <h2>Be the first to know</h2>
          <div className="flex-right">
            <i
              className="fa fa-link"
              aria-hidden="true"
              style={{ alignSelf: "center" }}
            />
            <h3 style={{ marginLeft: "5px" }}>view blog</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection