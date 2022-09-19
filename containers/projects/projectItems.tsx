import Image from "next/image";
import Link from "next/link";
import React from "react";
import { generateColor } from "../../utils/generateColor";

const ProjectItems = ({ allProjects }: any) => {
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
              <div className="w-1/2">
                <Image width="560" height="360" src={project.image.url} />
              </div>
              <div className="w-1/2 p-8">
                <h1 className="text-3xl font-bold text-[#F3F3F3] ">
                  {project.title}
                </h1>
                <p className="text-[17px] text-[#D6D6D6] mt-4">
                  {project.excerpt}
                </p>
                {project.tags.split(",").map((tag: string, index: number) => (
                  <button
                    key={index}
                    className={`py-1 px-3 mr-4 mt-4 ${generateColor(tag)[1]} ${
                      generateColor(tag)[0]
                    } text-[8px] rounded-[15px]`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectItems;
