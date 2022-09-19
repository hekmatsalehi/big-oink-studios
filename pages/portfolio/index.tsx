import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
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
