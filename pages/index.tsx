import React from "react";
import Contact from "../containers/home/contact";
import FeaturedProject from "../containers/home/featuredProject";
import Footer from "../components/footer";
import Hero from "../containers/home/hero";
import Navbar from "../components/navbar";
import Slider from "../containers/home/slider";
import { getSingleProject } from "../datocms/queries";

const Home = ({ project }: any) => {
  return (
    <>
      <Navbar type="home" />
      <Hero />
      <FeaturedProject project={project} />
      <Slider />
      <Contact />
      <Footer type="home" />
    </>
  );
};

export const getStaticProps = async () => {
  const singleProject = await getSingleProject("Horrible Design Promo");
  return {
    props: {
      project: singleProject.project,
    },
  };
};
export default Home;
