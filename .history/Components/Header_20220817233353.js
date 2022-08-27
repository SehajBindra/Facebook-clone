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
      </div>

      {/* center */}

      {/* right */}
    </div>
  );
}

export default Header;
