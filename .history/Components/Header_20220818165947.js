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
      <div>
        <Image
          src="https://links.papareact.com/5me"
          layout="fixed"
          height={40}
          width={40}
        />
        <div className="flex ml-2 bg-gray-100 p-2 rounded-full px-5 py-5  items-center">
          <SearchIcon className="h-6 " />
          <input
            className=" flex outline-none bg-transparent"
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
