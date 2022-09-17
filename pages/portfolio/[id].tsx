import React from 'react'
import Navbar from '../../containers/navbar';
import ProjectVideo from '../../containers/singlePortfolio/portfolioVideo';
import ProjectDetails from '../../containers/singlePortfolio/portfolioDetails';
import Footer from '../../containers/footer';


const Project = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center py-7 bg-stone-800">
        <ProjectVideo/>
        <ProjectDetails/>
      </div>
      <Footer/>
    </>
  )
}

export default Project;