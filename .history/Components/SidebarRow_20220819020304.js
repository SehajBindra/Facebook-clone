import Image from "next/image";
import React from "react";

function SidebarRow({ Icon, title, src }) {
  return <div>{src && <img src={src} alt="" />}</div>;
}

export default SidebarRow;
