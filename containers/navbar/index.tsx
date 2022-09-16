import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 bg-stone-800 text-slate-100">
      <div className="container mx-auto py-5 flex items-center justify-between">
          <span className="text-2xl font-semibold uppercase">Big Oink Studios</span>
          <span className="text-xl text-white uppercase">Portfolio</span>
      </div>
    </nav> 
  )
};

export default Navbar;
