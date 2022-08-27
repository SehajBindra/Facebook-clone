import Image from "next/image";
import React from "react";

function Contact({ src, name }) {
  return (
    <div>
      <Image
        width={50}
        height={50}
        className="avatar"
        objectFit="cover"
        src={src}
        layout="fixed"
      />
    </div>
  );
}

export default Contact;
