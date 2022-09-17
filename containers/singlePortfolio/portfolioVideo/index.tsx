import React from "react";

const PortfolioVideo = () => {
  return (
    <div className="w-4/6 h-[600px]">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/nImK2qsYoFM"
        title="Untouched Wilderness in America's Northernmost National Park - Gates of the Arctic"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default PortfolioVideo;
