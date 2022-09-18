import React from "react";

const PortfolioVideo = ({ project }: any) => {
  return (
    <div className="w-4/6 h-[600px]">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/K4TOrB7at0Y"
        title={project.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default PortfolioVideo;
