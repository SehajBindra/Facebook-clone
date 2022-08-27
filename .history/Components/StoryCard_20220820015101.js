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
        className=" rounded-full z-50 top-10 opacity-0 lg:opacity-100"
      />

      <Image
        layout="fill"
        src={src}
        className=" object-cover filter brightness-75 rounded-full lg:rounded-3xl"
      />
    </div>
  );
}

export default StoryCard;