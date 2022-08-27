import Image from "next/image";
import React from "react";

function Contact({ src, name }) {
  return (
    <div className="flex items-center p-2 space-x-4 relative mb-5 font-medium">
      <Image
        width={50}
        height={50}
        className="rounded-full cursor-pointer"
        objectFit="cover"
        src={src}
        layout="fixed"
      />

      <p>{name}</p>

      <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-pulse" />
    </div>
  );
}

export default Contact;
