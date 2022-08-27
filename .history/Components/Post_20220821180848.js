import Image from "next/image";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";

import { ChatAltIcon, ThumbUpIcon, ShareIcon } from "@heroicons/react/outline";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useSession } from "next-auth/react";

function Post({ id, username, userImg, img, message, timestamp }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState([]);
  const { data: session } = useSession();
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => setComments(snapshot.docs)
    );
  }, [db, id]);

  useEffect(() => {
    onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
      setLikes(snapshot.docs)
    );
  }, [db, id]);

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  }, [likes]);

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session?.user.uid), {
        username: session.user.name,
      });
    }
  };

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white rounded-t-2xl mt-8 shadow-md">
        <div className="flex items-center space-x-2">
          <img className="avatar" src={userImg} alt="" />

          <div>
            <p className="font-medium">{username}</p>

            <Moment className=" pr-5 text-sm " fromNow>
              {timestamp?.toDate()}
            </Moment>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>

      {img && (
        <div className="relative h-[23rem] md:h-96 lg:h-[40rem] bg-white rounded-xl">
          <Image layout="fill" objectFit="cover" src={img} alt="" />
        </div>
      )}

      {/* Footer Of Post  */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-lg text-gray-500 border-t">
        <div className="InputIcon b-t">
          {hasLiked ? (
            <ThumbUpIcon onClick={likePost} className="h-4 text-blue-500" />
          ) : (
            <ThumbUpIcon onClick={likePost} className="h-4 " />
          )}

          <p className="text-xs sm:text-sm md:first-letter:text-base font-medium">
            Like
          </p>
        </div>
        <div className="InputIcon">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-sm md:first-letter:text-base font-medium">
            Comment
          </p>
        </div>
        <div className="InputIcon rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-sm md:first-letter:text-base font-medium">
            Share
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
