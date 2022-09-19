import Image from "next/image";
import React from "react";
import oinkLogo from "../public/oinkLogo.png";

const OtherPageLogo = () => {
  return (
    <div className="flex flex-row item-center gap-1">
      <Image width="37px" height="33px" src={oinkLogo} alt="piggy head" />
      <span>Big Oink Studios</span>
    </div>
  );
};

export default OtherPageLogo;
