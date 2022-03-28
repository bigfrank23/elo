import React from 'react'
import "./ConsultantSection.css";

const ConsultantSection = () => {
  return (
    <div className="container" id="consultant-section">
      <div className="sec-top">
        <h1>
          How about a FREE Consultation on the Best Digital Marketing Strategy
          for your Business?
        </h1>
        <div className="sec-img">
          <img
            src="https://elonatech.com.ng/wp-content/uploads/2021/05/IMG_7338-removebg-preview-130x130.png"
            alt=""
          />
        </div>
      </div>
      <div className="sec-txt">
        <p>
          Want to know how to increase your brand visibility, boost audience
          engagement, drive traffic, increase social media followers, promote
          your products and service online and increase sales for your business?{" "}
        </p>
        <p>
          <b>Elonatech</b>
          offers tailored advice on how to reach and engage your audience
          better, increase conversion and maximize profit through a bespoke
          monthly/yearly digital marketing plan for your business
        </p>
        <div className="sec-btn">
          <button>GET A FREE CONSULTATION</button>
        </div>
      </div>
    </div>
  );
}

export default ConsultantSection