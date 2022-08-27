import React from "react";

function HeaderIcon({ Icon }) {
  return (
    <div className="flex items-center cursor-pointer md:px-10 sm:h-14  rounded-md md:hover:bg-gray-100">
      <Icon className="h-5 " />
    </div>
  );
}

export default HeaderIcon;
