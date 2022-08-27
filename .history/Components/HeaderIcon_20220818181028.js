import React from "react";

function HeaderIcon({ Icon }) {
  return (
    <div className="flex items-center cursor-pointer md:px-10 sm:h-14  rounded-xl md:hover:bg-gray-100 active:border-b-2 active:border-blue-500">
      <Icon className="h-5 " />
    </div>
  );
}

export default HeaderIcon;
