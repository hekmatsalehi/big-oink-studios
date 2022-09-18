import Link from "next/link";
import React from "react";

const PortfolioItems = ({ allProjects }: any) => {
  const projects = allProjects.allProjects;
  return (
    <div className="w-full bg-stone-800">
      <div className="container mx-auto py-10">
        {projects.map((project: any, index: number) => (
          <Link key={project.id} href={`/portfolio/${project.title}`}>
            <div
              className={
                // Alternate image and text
                index % 2 === 0
                  ? "flex items-center cursor-pointer"
                  : "flex text-right flex-row-reverse items-center cursor-pointer"
              }
            >
              <div className="w-1/2 ">
                <img
                  className="w-full object-cover"
                  src={project.image.url}
                ></img>
              </div>
              <div className="w-1/2 p-8">
                <h1 className="text-3xl font-bold text-[#F3F3F3] ">
                  {project.title}
                </h1>
                <p className="text-[17px] text-[#D6D6D6] mt-3">
                  {project.excerpt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioItems;
