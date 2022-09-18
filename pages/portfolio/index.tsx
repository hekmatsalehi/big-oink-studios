import React from "react";
import Footer from "../../containers/footer";
import Navbar from "../../containers/navbar";
import PortfolioItems from "../../containers/portfolios/portfolioItems";
import { getAllProjects } from "../../datocms/queries";

const Portfolio = ({ allProjects }: any) => {
  return (
    <>
      <Navbar />
      <PortfolioItems allProjects={allProjects} />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const allProjects = await getAllProjects();
  return {
    props: {
      allProjects,
    },
  };
};
export default Portfolio;
