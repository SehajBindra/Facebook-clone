import { useSession } from "next-auth/react";
import React, { useRef } from "react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db, storage } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

function InputBox() {
  const InputRef = useRef(null);
  const FilePikerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState();
  const { data: session } = useSession();

  const AddImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };
  const sendPost = async (e) => {
    e.preventDefault();

    if (!InputRef.current.value) return;

    const docRef = await addDoc(collection(db, "posts"), {
      username: session.user.name,
      message: InputRef.current.value,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    });
    {
      console.log("new doc added with id ", docRef.id);

      const imageRef = ref(storage, `posts${docRef.id}/image`);

      await uploadString(imageRef, imageToPost, "data_url").then(
        async (snapshot) => {
          const downloadURL = await getDownloadURL(imageRef);
          await updateDoc(doc(db, "posts", docRef.id), {
            image: downloadURL,
          });
        }
      );
      removeImage();
      setImageToPost(null);
      InputRef.current.value = "";
    }
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
            placeholder={`What's on Your mind  ${session?.user.name}?`}
          />

          <button type="submit" hidden className="" onClick={sendPost}>
            Post
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition-duration-150 hover:scale-125 cursor-pointer"
          >
            <img
              className="h-10 rounded-xl object-cover"
              src={imageToPost}
              alt=""
            />
            <p className="text-red-500 text-center text-xs font-medium sm:text-sm md:text-base">
              Remove
            </p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly p-3 border-1 ">
        <div className="InputIcon">
          <VideoCameraIcon className="text-red-500 h-5 sm:h-7" />
          <p className=" sm:text-sm xl:text-base"> Video</p>
        </div>
        <div onClick={() => FilePikerRef.current.click()} className="InputIcon">
          <CameraIcon className="h-5 sm:h-7 text-green-400" />
          <p className=" sm:text-sm xl:text-base">Photos</p>
          <input
            ref={FilePikerRef}
            onChange={AddImageToPost}
            type="file"
            hidden
          />
        </div>
        <div className="InputIcon">
          <EmojiHappyIcon className="h-5 sm:h-7 text-yellow-300" />
          <p className=" sm:text-sm xl:text-base">Feeling Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
