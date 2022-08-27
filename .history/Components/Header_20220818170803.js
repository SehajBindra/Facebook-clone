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
function Header() {
  return (
    <div>
      {/* left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          layout="fixed"
          height={40}
          width={40}
        />
        <div className="flex ml-2 bg-gray-100 p-2 rounded-full   items-center">
          <SearchIcon className="h-6 text-gray-600 " />
          <input
            className=" flex ml-2 items-center outline-none bg-transparent placeholder:text-gray-500"
            placeholder="Search facebook"
            type="text"
          />
        </div>
      </div>

      {/* center */}

      {/* right */}
    </div>
  );
}

export default Header;
