import React from "react";

function HeaderIcon({ Icon }) {
  return (
    <div className=" cursor-pointer md:px-10 sm:h-14">
      <Icon className="h-5 " />
    </div>
  );
}

export default HeaderIcon;
