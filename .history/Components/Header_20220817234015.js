import Image from "next/image";
import React from "react";

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
        <form className="flex flex-grow-0 max-w-sm rounded-xl bg-gray-400">
          <input className="flex focus:outline-none " type="text" />
        </form>
      </div>

      {/* center */}

      {/* right */}
    </div>
  );
}

export default Header;
