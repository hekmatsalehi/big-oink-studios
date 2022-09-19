import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";

const Logo = () => {
  return (
    <Image width="265" height="34.37" src={logo} alt="Noble Ocean Media" />
  );
};

export default Logo;
