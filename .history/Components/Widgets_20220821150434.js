import React from "react";

import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";

const contacts = [
  { src: "https://links.papareact.com/kxk", name: "Elon Musk" },
  { src: "https://links.papareact.com/zvy", name: "Bill Gates" },
  { src: "https://links.papareact.com/snf", name: "Mark Zukerberg" },
  { src: "https://links.papareact.com/d0c", name: "Harry Potter" },
];

function Widgets() {
  return (
    <div className="hidden lg:flex   flex-col">
      <div className="flex justify-between text-gray-500 items-center mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
          <SearchIcon className="h-6" />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
