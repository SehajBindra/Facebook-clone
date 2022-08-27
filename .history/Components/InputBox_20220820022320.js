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
          className=" focus-within:outline-none flex-grow rounded-full px-5 h-12 bg-gray-100"
          type="text"
          placeholder={`What's on Your mind ${session?.user.name}`}
        />
      </form>
    </div>
  );
}

export default InputBox;
