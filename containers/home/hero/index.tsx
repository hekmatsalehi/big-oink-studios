import React from "react";
import heroImage from "../../../public/coverShot.png";
import heroLogo from "../../../public/heroLogo.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[250px] md:h-[400px] lg:h-[550px] w-full bg-slate-400 relative flex justify-center items-center">
      <Image
        src={heroLogo}
        className="z-20 absolute"
        alt="Nobel Ocean Media logo"
      />
      {/* Overlay over hero image */}
      <div className="w-full h-full bg-[#000000] z-10 absolute top-0 left-0 opacity-30"></div>
      <Image
        alt="A beatiful house"
        layout="fill"
        objectFit="cover"
        src={heroImage}
      />
    </div>
  );
};

export default Hero;
