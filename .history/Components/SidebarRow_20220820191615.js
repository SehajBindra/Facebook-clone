import Image from "next/image";
import React from "react";

function SidebarRow({ Icon, title, src }) {
  return (
    <div className=" hidden flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer ">
      {src && <img className="avatar" src={src} alt="" />}

      {Icon && <Icon className="h-8 w-8 text-blue-500 " />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
}

export default SidebarRow;