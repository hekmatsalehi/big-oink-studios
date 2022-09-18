import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-[#474747]">
      <div className="container mx-auto py-10">
        <h2 className="text-[30px] pb-5 text-[#FFFFFF] font-bold font-['Didot']">
          We’d love to hear from you!
        </h2>
        <form className="flex flex-col ml-24 gap-4 text-[#FFFFFF] font-semibold text-[15px] ">
          <div className="flex w-3/4 gap-5">
            <div className="flex flex-col w-3/4 gap-1">
              <label className="" htmlFor="name">
                Name
              </label>
              <input
                className="p-2 w-full bg-transparent border-[1.5px] border-[#74BFC4]"
                type="text"
                id="name"
                required
              />
            </div>
            <div className="flex flex-col w-3/4 gap-1">
              <label className="" htmlFor="email">
                Email Address
              </label>
              <input
                className="p-2 w-full bg-transparent border-[1.5px] border-[#74BFC4]"
                type="email"
                id="email"
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-3/4 gap-1 pb-5">
            <label className="" htmlFor="message">
              Message
            </label>
            <textarea
              className="p-2 w-full h-[135px] bg-transparent border-[1.5px] border-[#74BFC4]"
              id="message"
            ></textarea>
          </div>
          <button className="w-fit bg-[#74BFC4] text-[#FFFFFF] font-medium px-4 py-2 cursor-pointer">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
