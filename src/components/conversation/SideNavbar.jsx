import React from 'react';

import { HiInbox } from "react-icons/hi2";
import { SiRedux } from "react-icons/si";
import { MdPeopleAlt } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";

const SideNavbar = () => {
  return (
    <nav className="flex flex-col bg-[#1E4D91] w-20 border-r">
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
    </nav>
  )
}

export default SideNavbar