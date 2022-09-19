import React from "react";

const ProjectVideo = ({ project }: any) => {
  if(!project) {
    return null;
  }
  return (
    <div className="w-4/6 ">
      <iframe
        className="w-full h-[270px] md:h-[400px] lg:h-[500px] xl:h-[600px]"
        src="https://www.youtube.com/embed/K4TOrB7at0Y"
        title={project.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default ProjectVideo;
