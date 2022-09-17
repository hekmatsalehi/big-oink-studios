import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-stone-900 text-slate-100">
      <div className="container mx-auto py-11 flex items-end  justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-semibold uppercase">
            Big Oink Studios
          </span>
          <span className="text-sm font-normal  ">
            WORK HARD, PLAY HARD, REST HARD
          </span>
        </div>
        <span className="text-sm">© 2022 Big Oink Studios</span>
      </div>
    </footer>
  );
};

export default Footer;
