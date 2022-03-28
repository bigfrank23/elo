import React from 'react'
import { Container } from 'react-bootstrap'
import ReactTyped from 'react-typed';
import './Expertise.css'

const Expertise = () => {
  return (
    <div className="expertise-container" id="expertise-container">
      <div className="row d-flex">
        <div className="col-6">
          <div className="left w-100">
            <img
              src="https://elonatech.com.ng/wp-content/uploads/2021/04/elona-1030x1030.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-6">
          <div className="right">
            {/* <div className="right-title"> */}
              <h2 className='right-title'>Elonatech</h2>
              <h3 className="right-typed-me">
                <ReactTyped
                  className="typed-me"
                  strings={[
                    "We focus on getting it done!",
                    "Reliable Partner For Your Business",
                    "Experience Innovative Solutions",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </h3>
              <p className='right-para'>The IT Solutions and Corporate Consultant Company.
                  <br/>
                  <br/>
                We endeavor to exceed our clients’ expectations with the
                solutions we provide, and aim at pricing our solutions and
                services competitively and deliver projects within budget while
                continuously striving to maintain premium quality and standard.
              </p>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Expertise