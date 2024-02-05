import React from "react";

import { HiInbox } from "react-icons/hi2";
import { SiRedux } from "react-icons/si";
import { MdPeopleAlt } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";

const SideNavbar = () => {
  const img = "";
  const placeholder =
    "https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg";
  return (
    <nav className="flex flex-col justify-between bg-[#1E4D91] w-20 border-r">
      <div className="flex flex-col">
        <div className="w-full bg-transparent p-4 cursor-pointer hover:opacity-[0.8] opacity-1">
          <SiRedux className="mx-auto h-6 w-6 text-white" />
        </div>
        <div className="w-full bg-white p-4 cursor-pointer">
          <HiInbox className="mx-auto h-6 w-6 text-[#1E4D91]" />
        </div>
        <div className="w-full bg-transparent p-4 cursor-pointer hover:opacity-[0.8] opacity-1">
          <MdPeopleAlt className="mx-auto h-6 w-6 text-white" />
        </div>
        <div className="w-full bg-transparent p-4 cursor-pointer hover:opacity-[0.8] opacity-1">
          <IoBarChartSharp className="mx-auto h-6 w-6 text-white" />
        </div>
      </div>
      <div className="flex items-center mx-auto mb-6 shadow-md border-none rounded-full">
        <div className={`avatar_badge online h-12 w-12`}>
          <img src={img || placeholder} alt={"SA"} />
        </div>
      </div>
    </nav>
  );
};

export default SideNavbar;
