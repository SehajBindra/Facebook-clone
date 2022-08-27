import Image from "next/image";
import React from "react";

function SidebarRow({ Icon, title, src }) {
  return (
    <div>
      {src && (
        <Image
          width={40}
          layout="fixed"
          height={40}
          className="avatar"
          src={src}
        />
      )}
    </div>
  );
}

export default SidebarRow;
