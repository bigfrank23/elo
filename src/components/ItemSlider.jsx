import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import ItemsCarousel from "react-items-carousel";
import './itemSlider.css'

const ItemSlider = () => {
  return (
    <div>
      <Carousel interval={1000}>
        <Carousel.Item interval={4000}>
          <div className="slider-info">
            <img
              src="https://elonatech.com.ng/wp-content/uploads/2021/05/PFN-Logo.png"
              alt=""
            />
            <img
              src="https://elonatech.com.ng/wp-content/uploads/2021/08/Olajide-Associates-1.png"
              alt=""
            />
            <img
              src="https://elonatech.com.ng/wp-content/uploads/2021/09/MTMSD-logo_3d.png"
              alt=""
            />
            <img
              src="https://elonatech.com.ng/wp-content/uploads/2021/05/kosofe_local_govt.-removebg-preview.png"
              alt=""
            />
            <img
              src="https://elonatech.com.ng/wp-content/uploads/2021/05/The-Home-Builders-Ministry-Logo.png"
              alt=""
            />
            <img
              src="https://elonatech.com.ng/wp-content/uploads/2021/05/Universal-Peace-Chaplains.png"
              alt=""
            />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div className="slider-info">
            <img
              src="https://elonatech.com.ng/wp-content/uploads/2021/05/okhma.jpg"
              alt=""
            />
            <img
              src="https://elonatech.com.ng/wp-content/uploads/2021/08/Wrahp-logo-2.png"
              alt=""
            />
            <img
              src="https://elonatech.com.ng/wp-content/uploads/2021/08/Diva-Cakes.png"
              alt=""
            />
            <img
              src="https://elonatech.com.ng/wp-content/uploads/2021/08/Domino-Stores-Limited-200x200-1.jpg"
              alt=""
            />
            <img
              src="https://elonatech.com.ng/wp-content/uploads/2021/08/Samsung-Heavy-Industries.jpg"
              alt=""
            />
            <img
              src="https://elonatech.com.ng/wp-content/uploads/2021/05/TruCSR-logo.png"
              alt=""
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ItemSlider
