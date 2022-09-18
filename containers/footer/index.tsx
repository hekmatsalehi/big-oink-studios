import React from "react";

const Footer = ({ type }) => {
  return (
    <footer className="w-full bg-[#111111] text-slate-100">
      <div className="container mx-auto pt-11 pb-12 flex items-end  justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-semibold uppercase">
            {type === "home" ? "Noble Ocean Media" : "Big Oink Studios"}
          </span>
          <span className="text-xs font-semibold">
            {type === "home"
              ? "WORK HARD, PLAY HARD, REST HARD"
              : "BRING HOME THE BACON"}
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
