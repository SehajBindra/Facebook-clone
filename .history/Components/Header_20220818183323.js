import Image from "next/image";
import React from "react";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
function Header() {
  return (
    <div className=" sticky top-0 bg-white z-50 flex items-center p-2 lg:px-5 shadow-md">
      {/* left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          layout="fixed"
          height={40}
          width={40}
        />
        <div className="flex ml-2 bg-gray-100 p-2 rounded-full py-3  items-center">
          <SearchIcon className="h-6 text-gray-600 " />
          <input
            className=" flex ml-2 items-center outline-none bg-transparent placeholder:text-gray-500 flex-shrink"
            placeholder="Search facebook"
            type="text"
          />
        </div>
      </div>

      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* right */}
      <div className="flex">
        {/* profile Pic */}
        <img
          className="h-6 w-6 sm:h-10 sm:w-10  rounded-full object-cover cursor-pointer transition duration-150 transform hover:scale-110"
          loading="lazy"
          src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt974d872b695b0d81/624ae84f0156b57dc6d81cd1/Ryan_Reynolds.jpg"
        />
        <p className="flex font-semibold pr-3 whitespace-nowrap">
          {" "}
          Sehaj Bindra
        </p>
      </div>
    </div>
  );
}

export default Header;
