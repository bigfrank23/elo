import React from 'react'
// import { Carousel } from "react-responsive-carousel";
import { Carousel } from "react-bootstrap";
import { testimonialContent } from '../testimonialContent';
import './TestimonialSlider.css'

const TestimonialSlider = () => {
  return (
    <div>
      <Carousel
        showArrows={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
        showThumbs={false}
        autoPlay
        interval={8000}
        controls={false}
      >
          {testimonialContent.map((item)=>(
          <Carousel.Item>
              <div>
                <div className="content-slide" key={item.id}>
                    <img
                        src={item.img}
                        alt=""
                    />
                    <div className="slider-text">
                        <p className="legend">
                            {item.desc}
                        </p>
                        <span className='t-name'>{item.name}</span><br/>
                        <span className='t-title'>{item.title}</span>
                    </div>
                </div>
              </div>
          </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
}

export default TestimonialSlider