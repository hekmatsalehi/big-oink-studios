import React from "react";

const Navbar = ({ type }) => {
  return (
    <nav
      className={
        type === "home"
          ? "w-full sticky top-0 z-10 bg-stone-800 text-slate-100"
          : "w-full border-b-[1px] border-[#626262] sticky top-0 z-10 bg-stone-800 text-slate-100"
      }
    >
      <div className="container mx-auto py-4 flex items-center justify-between">
        <span className="text-2xl font-semibold uppercase">
          {type === "home" ? "Noble Ocean Media" : "Big Oink Studios"}
        </span>
        <span
          className={
            type === "home"
              ? "text-xl uppercase"
              : "text-xl uppercase text-[#74BFC4]"
          }
        >
          Portfolio
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
