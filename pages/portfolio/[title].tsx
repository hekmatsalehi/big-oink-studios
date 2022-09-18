import React from 'react'
import Navbar from '../../containers/navbar';
import Footer from '../../containers/footer';
import PortfolioVideo from '../../containers/singlePortfolio/portfolioVideo';
import PortfolioDetails from '../../containers/singlePortfolio/portfolioDetails';
import { getAllProjects, getSingleProject } from '../../datocms/queries';


const SinglePortfolio = ({project}:any) => {
  if(!project) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center py-7 bg-stone-800">
        <PortfolioVideo project={project}/>
        <PortfolioDetails project={project}/>
      </div>
      <Footer/>
    </>
  )
}

export const getStaticPaths = async () => {
  const allProjects = await getAllProjects();
  let paths:any = [];

  allProjects.allProjects.map((project:any) => {
    paths.push(`/portfolio/${project.title}`)
  })
  console.log("path", paths)
  return {paths, fallback: true}
}

export const getStaticProps = async ({params}:any) => {
  const singleProject = await getSingleProject(params.title);
  return {
    props: {
      project: singleProject.project
    }
  }
}
export default SinglePortfolio;