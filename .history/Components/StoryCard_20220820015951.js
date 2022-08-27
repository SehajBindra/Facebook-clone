import Image from "next/image";
import React from "react";

function StoryCard({ name, src, profile }) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3">
      <Image
        layout="fill"
        src={profile}
        className=" h-8 w-8 object-cover rounded-full z-50 top-10 opacity-0 lg:opacity-100"
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
