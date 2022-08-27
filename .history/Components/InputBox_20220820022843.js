import { useSession } from "next-auth/react";
import React from "react";

function InputBox() {
  const { data: session } = useSession();
  const sendPost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white rounded-xl shadow-md  p-2 text-gray-500 mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <img className="avatar" src={session?.user.image} alt="" />

        <form className="flex flex-1 ">
          <input
            className=" focus-within:outline-none flex-grow rounded-full px-5 h-12 bg-gray-100"
            type="text"
            placeholder={`What's on Your mind ${session?.user.name}?`}
          />
        </form>
        <button type="submit" hidden onClick={sendPost}>
          submit
        </button>
      </div>
    </div>
  );
}

export default InputBox;
