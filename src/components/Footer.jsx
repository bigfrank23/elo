import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="container-fluid" id="footer">
      <div className="content-footer">
        <div className="content1">
          <div className="content1-img">
            <img
              src="https://elonatech.com.ng/wp-content/uploads/2022/03/Elonatech-icon-80x80.png"
              alt=""
            />
          </div>
          <div className="content-title">
            <h2>ELONATECH NIGERIA LIMITED</h2>
          </div>
          <div className="footer-content-txt">
            <p>4, Oluwakemi Street, Shasha Road, Egbeda, Lagos.</p>
            <span>+2349 0145 44520. </span>
            <span>info@elonatech.com.ng </span>
          </div>
          <div className="footer-social-box d-flex">
            <svg
              class="ct-icon"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              aria-label="Facebook Icon"
            >
              <path d="M20,10.1c0-5.5-4.5-10-10-10S0,4.5,0,10.1c0,5,3.7,9.1,8.4,9.9v-7H5.9v-2.9h2.5V7.9C8.4,5.4,9.9,4,12.2,4c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6v1.9h2.8L13.9,13h-2.3v7C16.3,19.2,20,15.1,20,10.1z"></path>
            </svg>
            <svg
              class="ct-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              aria-label="Instagram Icon"
            >
              <circle cx="10" cy="10" r="3.3"></circle>
              <path d="M14.2,0H5.8C2.6,0,0,2.6,0,5.8v8.3C0,17.4,2.6,20,5.8,20h8.3c3.2,0,5.8-2.6,5.8-5.8V5.8C20,2.6,17.4,0,14.2,0zM10,15c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,15,10,15z M15.8,5C15.4,5,15,4.6,15,4.2s0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8S16.3,5,15.8,5z"></path>
            </svg>
            <svg
              class="ct-icon"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              aria-label="Twitter Icon"
            >
              <path d="M20,3.8c-0.7,0.3-1.5,0.5-2.4,0.6c0.8-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1c-0.7-0.8-1.8-1.3-3-1.3c-2.3,0-4.1,1.8-4.1,4.1c0,0.3,0,0.6,0.1,0.9C6.4,6.7,3.4,5.1,1.4,2.6C1,3.2,0.8,3.9,0.8,4.7c0,1.4,0.7,2.7,1.8,3.4C2,8.1,1.4,7.9,0.8,7.6c0,0,0,0,0,0.1c0,2,1.4,3.6,3.3,4c-0.3,0.1-0.7,0.1-1.1,0.1c-0.3,0-0.5,0-0.8-0.1c0.5,1.6,2,2.8,3.8,2.8c-1.4,1.1-3.2,1.8-5.1,1.8c-0.3,0-0.7,0-1-0.1c1.8,1.2,4,1.8,6.3,1.8c7.5,0,11.7-6.3,11.7-11.7c0-0.2,0-0.4,0-0.5C18.8,5.3,19.4,4.6,20,3.8z"></path>
            </svg>
            <svg
              class="ct-icon"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              aria-label="LinkedIn Icon"
            >
              <path d="M18.6,0H1.4C0.6,0,0,0.6,0,1.4v17.1C0,19.4,0.6,20,1.4,20h17.1c0.8,0,1.4-0.6,1.4-1.4V1.4C20,0.6,19.4,0,18.6,0z M6,17.1h-3V7.6h3L6,17.1L6,17.1zM4.6,6.3c-1,0-1.7-0.8-1.7-1.7s0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,1.7,1.7C6.3,5.5,5.5,6.3,4.6,6.3z M17.2,17.1h-3v-4.6c0-1.1,0-2.5-1.5-2.5c-1.5,0-1.8,1.2-1.8,2.5v4.7h-3V7.6h2.8v1.3h0c0.4-0.8,1.4-1.5,2.8-1.5c3,0,3.6,2,3.6,4.5V17.1z"></path>
            </svg>
            <svg
              class="ct-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              aria-label="YouTube Icon"
            >
              <path d="M15,0H5C2.2,0,0,2.2,0,5v10c0,2.8,2.2,5,5,5h10c2.8,0,5-2.2,5-5V5C20,2.2,17.8,0,15,0z M14.5,10.9l-6.8,3.8c-0.1,0.1-0.3,0.1-0.5,0.1c-0.5,0-1-0.4-1-1l0,0V6.2c0-0.5,0.4-1,1-1c0.2,0,0.3,0,0.5,0.1l6.8,3.8c0.5,0.3,0.7,0.8,0.4,1.3C14.8,10.6,14.6,10.8,14.5,10.9z"></path>
            </svg>
            <svg
              class="ct-icon"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              aria-label="WhatsApp Icon"
            >
              <path d="M10,0C4.5,0,0,4.5,0,10c0,1.9,0.5,3.6,1.4,5.1L0.1,20l5-1.3C6.5,19.5,8.2,20,10,20c5.5,0,10-4.5,10-10S15.5,0,10,0zM6.6,5.3c0.2,0,0.3,0,0.5,0c0.2,0,0.4,0,0.6,0.4c0.2,0.5,0.7,1.7,0.8,1.8c0.1,0.1,0.1,0.3,0,0.4C8.3,8.2,8.3,8.3,8.1,8.5C8,8.6,7.9,8.8,7.8,8.9C7.7,9,7.5,9.1,7.7,9.4c0.1,0.2,0.6,1.1,1.4,1.7c0.9,0.8,1.7,1.1,2,1.2c0.2,0.1,0.4,0.1,0.5-0.1c0.1-0.2,0.6-0.7,0.8-1c0.2-0.2,0.3-0.2,0.6-0.1c0.2,0.1,1.4,0.7,1.7,0.8s0.4,0.2,0.5,0.3c0.1,0.1,0.1,0.6-0.1,1.2c-0.2,0.6-1.2,1.1-1.7,1.2c-0.5,0-0.9,0.2-3-0.6c-2.5-1-4.1-3.6-4.2-3.7c-0.1-0.2-1-1.3-1-2.6c0-1.2,0.6-1.8,0.9-2.1C6.1,5.4,6.4,5.3,6.6,5.3z"></path>
            </svg>
          </div>
        </div>
        <div className="content2-footer">
          <div className="content-title">
            <h2>Our Expertise</h2>
          </div>
          <div className="content2-list">
            <ul>
              <li>Web design</li>
              <li>Digital Marketing</li>
              <li>Brand Identity</li>
              <li>Network</li>
              <li>Administration/Implementation</li>
              <li>ACCESS CONTROL, PBX & SURVEILLANCE</li>
              <li>HARDWARE ENGINEERING</li>
              <li>Software Engineering</li>
              <li>Livestreaming and Videoconferencing</li>
              <li>VIDEO EDITING & MOTION GRAPHICS</li>
              <li>Sales and Supply</li>
              <li>Retainer Partnership</li>
              <li>TRAINING</li>
              <li>CONSULTING</li>
            </ul>
          </div>
        </div>
        <div className="content3-footer">
          <h2 className="content-title">The Company</h2>
          <div className="content3-list">
            <ul>
              <li>Who we are</li>
              <li>Our team</li>
              <li>Career</li>
              <li>Portfolio</li>
            </ul>
            <div className="mail-desc">
              <span>
                Enter your email address below to subscribe to our newsletter{" "}
              </span>
              <input type="text" placeholder="Your email *" />
              <button>Subscribe</button>
            </div>
            <div className="check">
              <input type="checkbox" />
              <label htmlFor="">I accept the Privacy Policy *</label>
            </div>
          </div>
        </div>
        <div className="content4-footer">
          <div className="content-title">
            <h2>Facebook</h2>
          </div>
          <div className="content4-box">
            <div className="c-div">
              <div className="content4-img d-flex">
                <img
                  src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-1/275821057_4304656212970005_7053190727281479972_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=106&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=eKptPIDEYDoAX8450Za&_nc_ht=scontent.flos5-2.fna&edm=ACzrp0UEAAAA&oh=00_AT8JJ0D8uo6R_WvpLiiqV1bCL3ahhlFXkoLROpE_pl6flA&oe=623E1AEB"
                  alt=""
                />
                23k likes
              </div>
              <div className="label">Elonatech...</div>
              <div className="reactions">
                <div className="likes">
                  <i className="fa fa-facebook" />
                  like page
                </div>
                <div className="share">
                  <i className="fa fa-share" />
                  Share
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div id="left">
          <p>Copyright © 2022 Elonatech - All Rights Reserved</p>
        </div>
        <div id="right">
          <p>Designed and Managed By Elonatech</p>
        </div>
      </div>
    </div>
  );
}

export default Footer