import Link from "next/link";
import React from "react";
import Logo from "../logo";
import OtherPageLogo from "../otherPageLogo";

const Navbar = ({ type }: any) => {
  return (
    <nav
      className={
        type === "home"
          ? "w-full sticky top-0 z-30 bg-stone-800 text-slate-100"
          : "w-full border-b-[1px] border-[#626262] sticky top-0 z-10 bg-stone-800 text-slate-100"
      }
    >
      <div className="container mx-auto py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold uppercase cursor-pointer">
            {type === "home" ? <Logo /> : <OtherPageLogo />}
          </span>
        </Link>
        <Link href="/portfolio">
          <span
            className={
              type === "home"
                ? "text-sm font-semibold  uppercase cursor-pointer hover:text-[#74BFC4] ease-out duration-200"
                : "text-sm font-semibold uppercase cursor-pointer text-[#74BFC4] hover:text-inherit ease-out duration-200"
            }
          >
            Portfolio
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
