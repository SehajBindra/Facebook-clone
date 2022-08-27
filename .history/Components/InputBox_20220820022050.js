import { useSession } from "next-auth/react";
import React from "react";

function InputBox() {
  const { data: session } = useSession();
  return (
    <div>
      <div>
        <img className="avatar" src={session?.user.image} alt="" />
      </div>
      <form className="flex flex-1 ">
        <input
          type="text"
          placeholder={`What's on Your mind ${session?.user.name}`}
        />
      </form>
    </div>
  );
}

export default InputBox;
