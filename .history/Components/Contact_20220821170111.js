import Image from "next/image";
import React from "react";

function Contact({ src, name }) {
  return (
    <div>
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
