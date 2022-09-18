import Link from "next/link";
import React from "react";

const ContactButton = () => {
  return (
    <Link href="/#contact">
      <button className="w-fit bg-[#74BFC4] text-[#FFFFFF] font-medium px-5 py-2 cursor-pointer">
        CONTACT US
      </button>
    </Link>
  );
};

export default ContactButton;
