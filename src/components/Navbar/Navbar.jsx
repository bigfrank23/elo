import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import './styles.css'

const Container = styled.div`
    width: 100%;
    height: 80px;
    position: absolute;
    padding: 20px;
    z-index: 1;
`
const Top = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  .ActiveNavbar {
    background-color: #33568f;
    position: fixed !important;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px 0 20px 100px !important;
    /* margin: 35px auto; */
    z-index: 1;
    padding-bottom: 1.5rem;
    transition: 0.25s;
  }
`;
const LogoContainer = styled.div`
    /* flex: 1; */
    width: 150px;
`
const Logo = styled.img`
    width: 100%;
`
const List = styled.ul`
    /* flex: 2; */
    list-style: none;
    display: flex;
`
const ListItem = styled.li`
  margin: 0;
  padding: 0;
  margin-left: 30px;
  font-size: 0.9em;
  font-weight: 700;
  font-family: "Roboto Condensed", sans-serif;
  text-transform: uppercase;
  color: #ddd;
  &:hover{
      color: red;
  }
  .list-icon {
    margin-left: 5px;
  }
`;
const SocialContainer = styled.div`
    /* flex: 1; */
`
const Divider = styled.div`
    width: 90%;
    height: 1px;
    background: #ddd;
    margin: 10px auto;
`

const Navbar = () => {
    const [scroll, setScroll] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 300) {
                setScroll(true)
            }else{
                setScroll(false)
            }
        })
    })
  return (
    <Container>
        <Top className={scroll && 'activeNavbar'}>
            <LogoContainer>
                <Logo src="https://elonatech.com.ng/wp-content/uploads/2022/03/Elonatech-White-1.png" alt='' />
            </LogoContainer>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Our Expertise
                    <i className="fa fa-angle-down list-icon" aria-hidden="true" />
                </ListItem>
                <ListItem>The company
                    <i className="fa fa-angle-down list-icon" aria-hidden="true" />
                </ListItem>
                <ListItem>More
                    <i className="fa fa-angle-down list-icon" aria-hidden="true" />
                </ListItem>
                <ListItem>
                    Get in touch
                </ListItem>
            </List>
            <SocialContainer>
                <div
          className="svgs d-flex align-items-center"
        >
          <div className="cart">
            <span class="ct-icon-containers">
              <svg
                class="ct-icon cart"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                aria-label="Cart header icon"
              >
                <path d="M0.6,0.7C0.3,0.7,0,0.8,0,1.1s0.1,0.6,0.6,0.6l0,0h1c0.1,0,0.1,0.1,0.1,0.1L4.2,10c0.3,0.7,0.9,1.2,1.6,1.2H12c0.7,0,1.3-0.6,1.6-1.2L15,4.7c0.1-0.3-0.1-0.6-0.4-0.6h-0.1H3.6L2.8,1.7l0,0c0-0.7-0.6-1-1.2-1H0.6zM6.1,12.2c-0.6,0-1,0.6-1,1c0,0.4,0.6,1,1,1c0.4,0,1-0.6,1-1C7.2,12.8,6.7,12.2,6.1,12.2zM11.7,12.2c-0.6,0-1,0.6-1,1c0,0.4,0.6,1,1,1c0.6,0,1-0.6,1-1C12.7,12.8,12.3,12.2,11.7,12.2z"></path>
              </svg>{" "}
            </span>
          </div>
          {/* <div className="divider"></div> */}
          {/* <div className="menu-icons"> */}
          <div
            class="socials"
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
          </div>
            </SocialContainer>
        </Top>
        <Divider />

    </Container>
  )
}

export default Navbar