import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import ProjectsItems from "../../containers/projects/projectItems";
import { getAllProjects } from "../../datocms/queries";

const Portfolio = ({ allProjects }: any) => {
  return (
    <>
      <Navbar />
      <ProjectsItems allProjects={allProjects} />
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
