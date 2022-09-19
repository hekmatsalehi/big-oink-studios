import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../logo";
import subLogo from "../../public/homePageFooterSubLogo.png";
import OtherPageLogo from "../otherPageLogo";

const Footer = ({ type }: any) => {
  return (
    <footer className="w-full bg-[#111111] text-slate-100">
      <div className="container mx-auto pt-11 pb-12 flex items-end  justify-between">
        <div className="flex flex-col gap-2  text-[#B2B2B2]">
          <Link href="/">
            <span
              className={
                type === "home"
                  ? "text-2xl font-semibold uppercase cursor-pointer"
                  : "text-2xl font-normal uppercase cursor-pointer"
              }
            >
              {type === "home" ? <Logo /> : <OtherPageLogo />}
            </span>
          </Link>
          <span className="text-xs font-semibold ml-11">
            {type === "home" ? (
              <Image
                width="239px"
                height="17px"
                src={subLogo}
                alt="Work hard, play hard, rest hard"
              />
            ) : (
              "BRING HOME THE BACON"
            )}
          </span>
        </div>
        <span className="text-sm font-normal text-[#7C7C7C]">
          {type === "home"
            ? "© 2021 Noble Ocean Media"
            : "© 2022 Big Oink Studios"}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
