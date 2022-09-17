import React from "react";

const FeaturedProject = () => {
  return (
    <div className="w-full bg-stone-800 text-slate-100 py-20 ">
      <div className="container mx-auto flex gap-20 text-[#F3F3F3]">
        <div className="flex flex-col gap-7">
          <h2 className="text-5xl font-bold">
            Working hard, playing hard, resting hard
          </h2>
          <p className="text-xl font-normal">
            At Noble Ocean, we make it our commitment to serve the customer
            first. This means whatever you need, we will do it. Need a video?
            Done. Need your room cleaned? We got you. Want your biggest
            competitor to accidentally wander into traffic? Say no more.{" "}
          </p>
          <button className="w-fit bg-[#74BFC4] text-[#FFFFFF] font-medium px-5 py-2 cursor-pointer">
            CONTACT US
          </button>
        </div>
        <div className="bg-[#474747] p-7 py-8 flex justify-center items-center flex-col gap-3 max-h-[340px]      ">
          <h2 className="text-xl font-semibold">SEE WHAT WE’VE BEEN UP TO:</h2>
          <iframe
            width="220"
            height="150"
            src="https://www.youtube.com/embed/nImK2qsYoFM"
            title="Untouched Wilderness in America's Northernmost National Park - Gates of the Arctic"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <p className="text-[15px] font-normal">
            John and Jane Smith Wedding Video
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
