import Image from "next/image";
import React from "react";

function SidebarRow({ Icon, title, src }) {
  return (
    <div>
      {src && <img className="avatar" src={src} alt="" />}

      {Icon && <Icon className="h-5 text-blue-500 " />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
}

export default SidebarRow;
