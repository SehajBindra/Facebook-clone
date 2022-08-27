import Image from "next/image";
import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

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
        <div>
          <SearchIcon className="h-6" />
          <input placeholder="Search facebook" type="text" />
        </div>
      </div>

      {/* center */}

      {/* right */}
    </div>
  );
}

export default Header;
