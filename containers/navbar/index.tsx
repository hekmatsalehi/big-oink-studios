import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-10 bg-stone-800 text-slate-100">
      <div className="container mx-auto py-4 flex items-center justify-between">
          <span className="text-2xl font-semibold uppercase">Big Oink Studios</span>
          <span className="text-xl uppercase">Portfolio</span>
      </div>
    </nav> 
  )
};

export default Navbar;
