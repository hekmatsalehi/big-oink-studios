import React from "react";
import Contact from "../containers/home/contact";
import FeaturedProject from "../containers/home/featuredProject";
import Footer from "../components/footer";
import Hero from "../containers/home/hero";
import Navbar from "../components/navbar";
import Slider from "../containers/home/slider";
import { getSingleProject } from "../datocms/queries";
import Head from "next/head";

const Home = ({ project }: any) => {
  return (
    <>
      <Head>
        <title>Noble Ocean Media</title>
        <meta
          name="description"
          content="At Noble Ocean, we make it our commitment to serve the customer first. This means whatever you need, we will do it. Need a video? Done. Need your room cleaned? We got you. Want your biggest competitor to accidentally wander into traffic? Say no more. "
        />
      </Head>
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
