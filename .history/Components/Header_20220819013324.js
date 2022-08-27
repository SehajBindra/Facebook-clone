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
import { signIn, signOut, useSession } from "next-auth/react";
import HeaderIcon from "./HeaderIcon";
function Header() {
  const { data: session, status } = useSession();
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
        <div className=" hidden md:inline-flex ml-2 bg-gray-100 p-2 rounded-full py-3  items-center">
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
        <div className="flex space-x-6 sm:space-x-2 md:space-x-1">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <BellIcon className="icon" />
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <ChevronDownIcon className="icon" />

        {/* profile Pic */}
        <img
          onClick={!session ? signIn : signOut}
          className="avatar"
          loading="lazy"
          src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt974d872b695b0d81/624ae84f0156b57dc6d81cd1/Ryan_Reynolds.jpg"
        />
        <p className="hidden md:inline-flex items-center ml-2 font-semibold pr-3 whitespace-nowrap">
          {" "}
          {session ? `${session.user?.name}` : "Unkonwn User"}
        </p>
      </div>
    </div>
  );
}

export default Header;
