import { useSession } from "next-auth/react";
import React from "react";

function InputBox() {
  const { data: session } = useSession();
  return (
    <div>
      <div>
        <img className="avatar" src={session?.user.image} alt="" />
      </div>
    </div>
  );
}

export default InputBox;
