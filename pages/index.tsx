import React from 'react'
import Contact from '../containers/home/contact';
import FeaturedProject from '../containers/home/featuredProject';
import Footer from '../containers/home/footer';
import Hero from '../containers/home/hero';
import Navbar from '../containers/navbar';
import Slider from '../containers/home/slider';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedProject/>
      <Slider/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home;