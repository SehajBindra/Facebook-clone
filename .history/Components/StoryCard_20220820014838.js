import Image from "next/image";
import React from "react";

function StoryCard({ name, src, profile }) {
  return (
    <div className="relative h-14 w-14">
      <Image
        width={40}
        height={40}
        layout="fixed"
        object="cover"
        src={profile}
        className=" avatar z-50 top-10 opacity-0 lg:opacity-100"
      />
    </div>
  );
}

export default StoryCard;
