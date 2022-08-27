import Image from "next/image";
import React from "react";

function SidebarRow({ Icon, title, src }) {
  return (
    <div>
      {src && <img className="avatar" src={src} alt="" />}

      {Icon && <Icon className="h-5 " />}
    </div>
  );
}

export default SidebarRow;
