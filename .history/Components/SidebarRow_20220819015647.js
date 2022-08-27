import Image from "next/image";
import React from "react";

function SidebarRow({ Icon, title, src }) {
  return <div>{src && <Image className="avatar" src={src} />}</div>;
}

export default SidebarRow;
