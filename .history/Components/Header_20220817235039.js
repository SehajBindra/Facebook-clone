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
        <div className="flex max-w-sm rounded-full px-5 py-5 bg-gray-400 ">
          <SearchIcon className="h-6 " />
          <input
            className=" outline-none focus:outline-none"
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
