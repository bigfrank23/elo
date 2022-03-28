import React, { useEffect, useState } from 'react'
import "./Expertise.css";
// import { Link } from 'react-router-dom';
import './HeroSection.css'
import BackgroundSlider from "react-background-slider";
import Typed from "react-typed";
import { CSSTransition } from "react-transition-group";
import { Container, Button, Alert, Nav } from "react-bootstrap";
import TextLoop from "react-text-loop";
import { Link } from 'react-router-dom';
const image1 = "https://elonatech.com.ng//wp-content//uploads//2021//04//heylagostechie-IgUR1iX0mqM-unsplash-1-scaled.jpg"
const image2 = "https://elonatech.com.ng//wp-content//uploads//2021//04//sergey-zolkin-_UeY8aTI6d0-unsplash-1-scaled.jpg"
const image3 = "https://elonatech.com.ng//wp-content//uploads//2021//08//Network-scaled.jpg"

const HeroSection = ({totalItems}) => {
    const [showButton, setShowButton] = useState(true);
    const [showButton2, setShowButton2] = useState(true);
    const [showButton3, setShowButton3] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);
    const [showMessage3, setShowMessage3] = useState(false);

    console.log(totalItems);

    const [scroll, setScroll] = useState(false)
    const [scroll2, setScroll2] = useState(false)
    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        setScroll(window.scrollY > 300)
      }, [])
    })
    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        setScroll2(window.scrollY > 30)
      }, [])
    })
  return (
    <div className="container">
      {/* <div className="banner"> */}
      <BackgroundSlider
        images={[image1, image2, image3]}
        duration={5}
        transition={0.3}
      />
      <div className={scroll ? "navbar-active" : "navbar"}>
        <div className="logo">
          <img
            src="https://elonatech.com.ng/wp-content/uploads/2022/03/Elonatech-White-1.png"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </div>
        <ul className="list">
          <li
            className="list-item"
            onMouseOver={() => {
              setShowMessage(false);
              setShowMessage(false);
              setShowMessage3(false);
            }}
          >
            Home
          </li>
          <li
            className="list-item"
            onMouseOver={() => {
              setShowMessage(true);
              setShowMessage2(false);
              setShowMessage3(false);
            }}
          >
            Our expertise{" "}
            <i className="fa fa-angle-down list-icon" aria-hidden="true" />
          </li>
          <li
            className="list-item"
            onMouseOver={() => {
              setShowMessage2(true);
              setShowMessage(false);
              setShowMessage3(false);
            }}
          >
            The company{" "}
            <i className="fa fa-angle-down list-icon" aria-hidden="true" />
          </li>
          <li
            className="list-item"
            onMouseOver={() => {
              setShowMessage3(true);
              setShowMessage(false);
              setShowMessage2(false);
            }}
          >
            More <i className="fa fa-angle-down list-icon" aria-hidden="true" />
          </li>
          <li
            className="list-item"
            onMouseOver={() => {
              setShowMessage3(false);
              setShowMessage(false);
              setShowMessage2(false);
            }}
          >
            get in touch
          </li>
          <li
            className="list-item"
            onMouseOver={() => {
              setShowMessage3(false);
              setShowMessage(false);
              setShowMessage2(false);
            }}
          >
            blog
          </li>
        </ul>
        <div
          className="svgs d-flex align-items-center"
          onMouseOver={() => {
            setShowMessage(false);
            setShowMessage(false);
            setShowMessage3(false);
          }}
        >
          <div className="cart">
            <Link to='/cart'>
              <span class="ct-icon-containers">
                <span style={{color: "#fff", background: 'red', borderRadius: "100px", padding: "5px", width: "30px", height: "20px"}}>
                {totalItems}
                </span>
                <svg
                  class="ct-icon cart"
                  style={{cursor: "pointer"}}
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  aria-label="Cart header icon"
                >
                  <path d="M0.6,0.7C0.3,0.7,0,0.8,0,1.1s0.1,0.6,0.6,0.6l0,0h1c0.1,0,0.1,0.1,0.1,0.1L4.2,10c0.3,0.7,0.9,1.2,1.6,1.2H12c0.7,0,1.3-0.6,1.6-1.2L15,4.7c0.1-0.3-0.1-0.6-0.4-0.6h-0.1H3.6L2.8,1.7l0,0c0-0.7-0.6-1-1.2-1H0.6zM6.1,12.2c-0.6,0-1,0.6-1,1c0,0.4,0.6,1,1,1c0.4,0,1-0.6,1-1C7.2,12.8,6.7,12.2,6.1,12.2zM11.7,12.2c-0.6,0-1,0.6-1,1c0,0.4,0.6,1,1,1c0.6,0,1-0.6,1-1C12.7,12.8,12.3,12.2,11.7,12.2z"></path>
              
                </svg>{" "}
              </span>
            </Link>
          </div>
          {/* <div className="divider"></div> */}
          {/* <div className="menu-icons"> */}
          <div
            class="socials"
            onMouseOver={() => {
              setShowMessage(false);
              setShowMessage(false);
              setShowMessage3(false);
            }}
          >
            {/* <div class="ct-social-box"> */}
            <a
              href="https://www.facebook.com/elonatech"
              rel="noopener noreferrer nofollow"
              data-network="facebook"
              aria-label="Facebook"
              target="_blank"
            >
              <span class="ct-icon-container">
                <svg
                  class="ct-icon"
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  aria-label="Facebook Icon"
                >
                  <path d="M20,10.1c0-5.5-4.5-10-10-10S0,4.5,0,10.1c0,5,3.7,9.1,8.4,9.9v-7H5.9v-2.9h2.5V7.9C8.4,5.4,9.9,4,12.2,4c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6v1.9h2.8L13.9,13h-2.3v7C16.3,19.2,20,15.1,20,10.1z"></path>
                </svg>
              </span>{" "}
            </a>
            <a
              href="https://www.instagram.com/Elonatech/"
              rel="noopener noreferrer nofollow"
              data-network="instagram"
              aria-label="Instagram"
              target="_blank"
            >
              <span class="ct-icon-container">
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
              </span>{" "}
            </a>
            <a
              href="https://twitter.com/Elonatech"
              rel="noopener noreferrer nofollow"
              data-network="twitter"
              aria-label="Twitter"
              target="_blank"
            >
              <span class="ct-icon-container">
                <svg
                  class="ct-icon"
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  aria-label="Twitter Icon"
                >
                  <path d="M20,3.8c-0.7,0.3-1.5,0.5-2.4,0.6c0.8-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1c-0.7-0.8-1.8-1.3-3-1.3c-2.3,0-4.1,1.8-4.1,4.1c0,0.3,0,0.6,0.1,0.9C6.4,6.7,3.4,5.1,1.4,2.6C1,3.2,0.8,3.9,0.8,4.7c0,1.4,0.7,2.7,1.8,3.4C2,8.1,1.4,7.9,0.8,7.6c0,0,0,0,0,0.1c0,2,1.4,3.6,3.3,4c-0.3,0.1-0.7,0.1-1.1,0.1c-0.3,0-0.5,0-0.8-0.1c0.5,1.6,2,2.8,3.8,2.8c-1.4,1.1-3.2,1.8-5.1,1.8c-0.3,0-0.7,0-1-0.1c1.8,1.2,4,1.8,6.3,1.8c7.5,0,11.7-6.3,11.7-11.7c0-0.2,0-0.4,0-0.5C18.8,5.3,19.4,4.6,20,3.8z"></path>
                </svg>
              </span>{" "}
            </a>
            <a
              href="https://www.linkedin.com/company/elonatech"
              rel="noopener noreferrer nofollow"
              data-network="linkedin"
              aria-label="LinkedIn"
              target="_blank"
            >
              <span class="ct-icon-container">
                <svg
                  class="ct-icon"
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  aria-label="LinkedIn Icon"
                >
                  <path d="M18.6,0H1.4C0.6,0,0,0.6,0,1.4v17.1C0,19.4,0.6,20,1.4,20h17.1c0.8,0,1.4-0.6,1.4-1.4V1.4C20,0.6,19.4,0,18.6,0z M6,17.1h-3V7.6h3L6,17.1L6,17.1zM4.6,6.3c-1,0-1.7-0.8-1.7-1.7s0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,1.7,1.7C6.3,5.5,5.5,6.3,4.6,6.3z M17.2,17.1h-3v-4.6c0-1.1,0-2.5-1.5-2.5c-1.5,0-1.8,1.2-1.8,2.5v4.7h-3V7.6h2.8v1.3h0c0.4-0.8,1.4-1.5,2.8-1.5c3,0,3.6,2,3.6,4.5V17.1z"></path>
                </svg>
              </span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCWUmGTWxXPZixkJqJVhhJFA"
              rel="noopener noreferrer nofollow"
              data-network="youtube"
              aria-label="YouTube"
              target="_blank"
            >
              <span class="ct-icon-container">
                <svg
                  class="ct-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  aria-label="YouTube Icon"
                >
                  <path d="M15,0H5C2.2,0,0,2.2,0,5v10c0,2.8,2.2,5,5,5h10c2.8,0,5-2.2,5-5V5C20,2.2,17.8,0,15,0z M14.5,10.9l-6.8,3.8c-0.1,0.1-0.3,0.1-0.5,0.1c-0.5,0-1-0.4-1-1l0,0V6.2c0-0.5,0.4-1,1-1c0.2,0,0.3,0,0.5,0.1l6.8,3.8c0.5,0.3,0.7,0.8,0.4,1.3C14.8,10.6,14.6,10.8,14.5,10.9z"></path>
                </svg>
              </span>
            </a>
            {/* </div> */}
            {/* </div> */}
          </div>
          <CSSTransition
            in={
              showMessage || showMessage2 || showMessage2
              //   (!showMessage && !showMessage3 && showMessage2) ||
              //   (!showMessage && !showMessage2 && showMessage3)
            }
            timeout={300}
            classNames="alert"
            unmountOnExit
          >  
            <Alert
              style={{
                background: "#33568f",
                position: "absolute",
                top: "90px",
                left: "0",
                width: "100%",
                zIndex: 1,
              }}
              //   onMouseEnter={() => setShowMessage(true)}
              //   onMouseLeave={() => setShowMessage(false)}
            >
              <Nav className="d-flex justify-content-around flex-nowrap">
                {showMessage ? (
                  <>
                    <ul className="hover-list">
                      <li className="hover-list-items">
                        web design <br />
                        and <br /> development
                      </li>
                      <li className="hover-list-items">
                        software <br /> engineer
                      </li>
                      <li className="hover-list-items">consulting</li>
                    </ul>
                    <ul className="hover-list">
                      <li className="hover-list-items">
                        digital
                        <br />
                        marketing
                      </li>
                      <li className="hover-list-items">
                        livestreaming
                        <br /> videoconferencing
                      </li>
                    </ul>
                    <ul className="hover-list">
                      <li className="hover-list-items">
                        brand
                        <br />
                        identity
                      </li>
                      <li className="hover-list-items">
                        video editing
                        <br /> & motion <br /> graphics
                      </li>
                    </ul>
                    <ul className="hover-list">
                      <li className="hover-list-items">
                        network
                        <br />
                        admin/implementation
                      </li>
                      <li className="hover-list-items">
                        sales and
                        <br /> supply
                      </li>
                    </ul>
                    <ul className="hover-list">
                      <li className="hover-list-items">
                        access
                        <br />
                        control,pbx
                        <br /> & <br /> surveillance
                      </li>
                      <li className="hover-list-items">
                        retail
                        <br /> partnership
                      </li>
                    </ul>
                    <ul className="hover-list">
                      <li className="hover-list-items">
                        hardware
                        <br />
                        engineering
                      </li>
                      <li className="hover-list-items">trainining</li>
                    </ul>
                  </>
                ) : ""}
                {showMessage2 ? (
                  <>
                    <ul className="hover-list showMsg2">
                      <li className="hover-list-items">who we are</li>
                    </ul>
                    <div className="divider"></div>
                    <ul className="hover-list showMsg2">
                      <li className="hover-list-items">our team</li>
                    </ul>
                    <div className="divider"></div>
                    <ul className="hover-list showMsg2">
                      <li className="hover-list-items">portfolio</li>
                    </ul>
                    <div className="divider"></div>
                    <ul className="hover-list showMsg2">
                      <li className="hover-list-items">career</li>
                    </ul>
                  </>
                ) : ""}
                {showMessage3 ? (
                  <>
                    <ul className="hover-list showMsg3">
                      <li className="hover-list-items">computers</li>
                    </ul>
                    <div className="divider"></div>
                    <ul className="hover-list showMsg3">
                      <li className="hover-list-items">office equipments</li>
                    </ul>
                    <div className="divider"></div>
                    <ul className="hover-list showMsg3">
                      <li className="hover-list-items">printers</li>
                    </ul>
                    <div className="divider"></div>
                    <ul className="hover-list showMsg3">
                      <li className="hover-list-items">pos system</li>
                    </ul>
                  </>
                ) : ""}
              </Nav>
            </Alert>
          </CSSTransition>
        </div>
      </div>
      <div
        className="overlay"
        onMouseEnter={() => {
          setShowMessage(false);
          setShowMessage2(false);
          setShowMessage3(false);
        }}
      >
        <div className="content">
          <h6>Who we are</h6>
          <Typed
            className="typed-me"
            strings={[
              "WE ARE SEO EXPERTS",
              "WE ARE DIGITAL MARKETERS",
              "WE ARE WEB DEVELOPERS",
              "WE ARE SYSTEM ENGINEERS",
              "WE ARE NETWORK ADMINISTRATORS",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          <p className="pText1">
            {/* <TextLoop 
                        fade={true}
                        springConfig={{ stiffness: 180, damping: 8 }}
                        // adjustingSpeed={200}
                        // delay={1}
                        > */}
            <span>
              We are experts in providing{" "}
              <b style={{ color: "white" }}>digital marketing strategies </b>
              that convert <b style={{ color: "white" }}>engagement</b> clicks
              to sales{" "}
            </span>
            {/* <span>We offer  <b style={{color: "white"}}>bespoke </b>
                            user experience, <b style={{color: "white"}}> web design</b>  , <b style={{color: "white"}}> app design</b>
                            , and <b style={{color: "white"}}>software development services</b>.
                            </span>
                        <span>The first phase in the  <b style={{color: "white"}}> life cycle</b>
                            of a  <b style={{color: "white"}}> network</b>   involves <b style={{color: "white"}}>  creating its design</b>
                            , a task not usually performed by  <b style={{color: "white"}}> <br /> new network administrators</b>.
                            </span> */}
            {/* </TextLoop> */}
          </p>
          <div>
            <button type="button">Know More</button>
          </div>
        </div>
      </div>
      {/* </div> */}
      {scroll2 && (
        <div className='svg-container'>
        <div class="svg-shape-bottom" data-negative="false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 283.5 27.8"
            preserveAspectRatio="none"
            className='svg-shape'
          >
            <path
              class="elementor-shape-fill"
              d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7	s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7	c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z M260.8,11.3	c-0.7-1-2-0.4-4.3-0.4c-2.3,0-6.1-1.2-5.8-1.1c0.3,0.1,3.1,1.5,6,1.9C259.7,12.2,261.4,12.3,260.8,11.3z M242.4,8.6	c0,0-2.4-0.2-5.6-0.9c-3.2-0.8-10.3-2.8-15.1-3.5c-8.2-1.1-15.8,0-15.1,0.1c0.8,0.1,9.6-0.6,17.6,1.1c3.3,0.7,9.3,2.2,12.4,2.7	C239.9,8.7,242.4,8.6,242.4,8.6z M185.2,8.5c1.7-0.7-13.3,4.7-18.5,6.1c-2.1,0.6-6.2,1.6-10,2c-3.9,0.4-8.9,0.4-8.8,0.5	c0,0.2,5.8,0.8,11.2,0c5.4-0.8,5.2-1.1,7.6-1.6C170.5,14.7,183.5,9.2,185.2,8.5z M199.1,6.9c0.2,0-0.8-0.4-4.8,1.1	c-4,1.5-6.7,3.5-6.9,3.7c-0.2,0.1,3.5-1.8,6.6-3C197,7.5,199,6.9,199.1,6.9z M283,6c-0.1,0.1-1.9,1.1-4.8,2.5s-6.9,2.8-6.7,2.7	c0.2,0,3.5-0.6,7.4-2.5C282.8,6.8,283.1,5.9,283,6z M31.3,11.6c0.1-0.2-1.9-0.2-4.5-1.2s-5.4-1.6-7.8-2C15,7.6,7.3,8.5,7.7,8.6	C8,8.7,15.9,8.3,20.2,9.3c2.2,0.5,2.4,0.5,5.7,1.6S31.2,11.9,31.3,11.6z M73,9.2c0.4-0.1,3.5-1.6,8.4-2.6c4.9-1.1,8.9-0.5,8.9-0.8	c0-0.3-1-0.9-6.2-0.3S72.6,9.3,73,9.2z M71.6,6.7C71.8,6.8,75,5.4,77.3,5c2.3-0.3,1.9-0.5,1.9-0.6c0-0.1-1.1-0.2-2.7,0.2	C74.8,5.1,71.4,6.6,71.6,6.7z M93.6,4.4c0.1,0.2,3.5,0.8,5.6,1.8c2.1,1,1.8,0.6,1.9,0.5c0.1-0.1-0.8-0.8-2.4-1.3	C97.1,4.8,93.5,4.2,93.6,4.4z M65.4,11.1c-0.1,0.3,0.3,0.5,1.9-0.2s2.6-1.3,2.2-1.2s-0.9,0.4-2.5,0.8C65.3,10.9,65.5,10.8,65.4,11.1	z M34.5,12.4c-0.2,0,2.1,0.8,3.3,0.9c1.2,0.1,2,0.1,2-0.2c0-0.3-0.1-0.5-1.6-0.4C36.6,12.8,34.7,12.4,34.5,12.4z M152.2,21.1	c-0.1,0.1-2.4-0.3-7.5-0.3c-5,0-13.6-2.4-17.2-3.5c-3.6-1.1,10,3.9,16.5,4.1C150.5,21.6,152.3,21,152.2,21.1z"
            ></path>
            <path
              class="elementor-shape-fill"
              d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C267.7,18.8,269.7,18,269.6,18z"
            ></path>
            <path
              class="elementor-shape-fill"
              d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2	S227.6,9.9,227.4,9.8z"
            ></path>
            <path
              class="elementor-shape-fill"
              d="M204.5,13.4c-0.1-0.1,2-1,3.2-1.1c1.2-0.1,2,0,2,0.3c0,0.3-0.1,0.5-1.6,0.4	C206.4,12.9,204.6,13.5,204.5,13.4z"
            ></path>
            <path
              class="elementor-shape-fill"
              d="M201,10.6c0-0.1-4.4,1.2-6.3,2.2c-1.9,0.9-6.2,3.1-6.1,3.1c0.1,0.1,4.2-1.6,6.3-2.6	S201,10.7,201,10.6z"
            ></path>
            <path
              class="elementor-shape-fill"
              d="M154.5,26.7c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C152.6,27.5,154.6,26.8,154.5,26.7z"
            ></path>
            <path
              class="elementor-shape-fill"
              d="M41.9,19.3c0,0,1.2-0.3,2.9-0.1c1.7,0.2,5.8,0.9,8.2,0.7c4.2-0.4,7.4-2.7,7-2.6	c-0.4,0-4.3,2.2-8.6,1.9c-1.8-0.1-5.1-0.5-6.7-0.4S41.9,19.3,41.9,19.3z"
            ></path>
            <path
              class="elementor-shape-fill"
              d="M75.5,12.6c0.2,0.1,2-0.8,4.3-1.1c2.3-0.2,2.1-0.3,2.1-0.5c0-0.1-1.8-0.4-3.4,0	C76.9,11.5,75.3,12.5,75.5,12.6z"
            ></path>
            <path
              class="elementor-shape-fill"
              d="M15.6,13.2c0-0.1,4.3,0,6.7,0.5c2.4,0.5,5,1.9,5,2c0,0.1-2.7-0.8-5.1-1.4	C19.9,13.7,15.7,13.3,15.6,13.2z"
            ></path>
          </svg>{" "}
        </div>
      </div>
      )}
    </div>
  );
}

export default HeroSection