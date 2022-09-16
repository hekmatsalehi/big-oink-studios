import React from 'react'
import Contact from '../containers/contact';
import FeaturedPost from '../containers/featuredPost';
import Footer from '../containers/footer';
import Hero from '../containers/hero';
import Navbar from '../containers/navbar';
import Slider from '../containers/slider';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedPost/>
      <Slider/>
      <Contact/>
      <Footer/>
      

    </div>
  )
}

export default Home;