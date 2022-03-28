import React from 'react'
import HeroSection from '../../components/HeroSection'
import Expertise from '../../components/Expertise'
import OurExpertise from '../../components/OurExpertise'
import TestimonialSection from '../../components/TestimonialSection'
import ConsultantSection from '../../components/ConsultantSection'
import Commerce from '../../components/Commerce'
import RecentBlog from '../../components/RecentBlog'
import Footer from '../../components/Footer'

const Home = ({ products, onAddToCart, totalItems }) => {
  return (
    <div>
      <HeroSection totalItems={totalItems} />
      <Expertise />
      <OurExpertise />
      <TestimonialSection />
      <ConsultantSection />
      <Commerce products={products} onAddToCart={onAddToCart} />
      <RecentBlog />
      <Footer />
    </div>
  );
};

export default Home