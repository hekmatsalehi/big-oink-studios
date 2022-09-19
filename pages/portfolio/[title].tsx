import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ProjectVideo from "../../containers/singleProject/projectVideo";
import ProjectDetails from "../../containers/singleProject/projectDetails";
import { getAllProjects, getSingleProject } from "../../datocms/queries";
import Head from "next/head";

const SinglePortfolio = ({ project }: any) => {
  if (!project) {
    return null;
  }
  return (
    <>
      <Head>
        <title>{project.title}</title>
        <meta
          name="description"
          content="Work hard, play hard, and rest hard."
        />
      </Head>
      <Navbar />
      <div className="flex flex-col justify-center items-center py-7 bg-stone-800">
        <ProjectVideo project={project} />
        <ProjectDetails project={project} />
      </div>
      <Footer />
    </>
  );
};

export const getStaticPaths = async () => {
  const allProjects = await getAllProjects();
  let paths: any = [];

  allProjects.allProjects.map((project: any) => {
    paths.push(`/portfolio/${project.title}`);
  });
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }: any) => {
  const singleProject = await getSingleProject(params.title);
  return {
    props: {
      project: singleProject.project,
    },
  };
};
export default SinglePortfolio;
