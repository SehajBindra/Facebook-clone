import Image from "next/image";
import React from "react";

function Contact({ src, name }) {
  return (
    <div className="flex items-center p-2 space-x-4 font-medium">
      <Image
        width={50}
        height={50}
        className="rounded-full cursor-pointer"
        objectFit="cover"
        src={src}
        layout="fixed"
      />

      <p>{name}</p>
    </div>
  );
}

export default Contact;
