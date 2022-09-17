import React from 'react'
import Navbar from '../../containers/navbar';
import Footer from '../../containers/footer';
import PortfolioVideo from '../../containers/singlePortfolio/portfolioVideo';
import PortfolioDetails from '../../containers/singlePortfolio/portfolioDetails';


const SinglePortfolio = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center py-7 bg-stone-800">
        <PortfolioVideo/>
        <PortfolioDetails/>
      </div>
      <Footer/>
    </>
  )
}

export default SinglePortfolio;