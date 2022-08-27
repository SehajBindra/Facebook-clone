import { useSession } from "next-auth/react";
import React, { useRef } from "react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db } from "../firebase";
import { serverTimestamp } from "firebase/firestore";

function InputBox() {
  const InputRef = useRef();
  const { data: session } = useSession();
  const sendPost = (e) => {
    e.preventDefault();

    if (!InputRef.current.value) return;

    db.collection("posts").add({
      message: InputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: serverTimestamp(),
    });

    InputRef.current.value = "";
  };
  return (
    <div className="bg-white rounded-xl shadow-md  p-2 text-gray-500 mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <img className="avatar" src={session?.user.image} alt="" />

        <form className="flex flex-1 ">
          <input
            ref={InputRef}
            className=" focus-within:outline-none flex-grow rounded-full px-5 h-12 bg-gray-100"
            type="text"
            placeholder={`What's on Your mind ${session?.user.name}?`}
          />
        </form>
        <button type="submit" hidden onClick={sendPost}>
          submit
        </button>
      </div>
      <div className="flex justify-evenly p-3 border-1 ">
        <div className="InputIcon">
          <VideoCameraIcon className="text-red-500 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="InputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo - Video</p>
        </div>
        <div className="InputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
