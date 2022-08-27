import Image from "next/image";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";

import {
  ChatAltIcon,
  ThumbUpIcon,
  ShareIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import {
  addDoc,
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
    onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
      setLikes(snapshot.docs)
    );
  }, [db, id]);

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user.name) !== -1
    );
  }, [likes]);

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.name));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.name), {
        username: session.user.name,
      });
    }
  };

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => setComments(snapshot.docs)
    );
  }, [db, id]);

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.name,
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
      <div className="flex justify-between items-center  bg-white shadow-lg text-gray-500 border-t">
        <div onClick={likePost} className="InputIcon b-t">
          {hasLiked ? (
            <ThumbUpIcon onClick={likePost} className="h-4 text-blue-500" />
          ) : (
            <ThumbUpIcon onClick={likePost} className="h-4 " />
          )}

          <p className="text-xs sm:text-sm md:first-letter:text-base font-medium">
            {likes.length > 0 && (
              <p className=" font-semibold mb-1"> {likes.length} likes</p>
            )}
          </p>
        </div>
        <div className="InputIcon">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-sm md:first-letter:text-base font-medium">
            Comment
          </p>
        </div>
        <div className="InputIcon ">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-sm md:first-letter:text-base font-medium">
            Share
          </p>
        </div>
      </div>
      {/* comments */}
      {session && (
        // {comments.length > 0 && (
        <div className="ml-2 bg-white max-h-8 overflow-y-scroll scrollbar-hide ">
          {comments.map((comment) => (
            <div
              className=" flex items-center justify-start space-x-2 mb-3 "
              key={comment.id}
            >
              <img
                className=" pointer-events-none h-7 rounded-full "
                src={comment.data().userImage}
                alt=""
              />
              <p className=" text-sm  flex-1 items-start">
                <span className=" font-semibold">
                  {comment.data().username}{" "}
                </span>
                {comment.data().comment}
              </p>

              <Moment className=" pr-5 text-sm " fromNow>
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* input box */}
      {session && (
        <form className="flex items-center p-4 bg-white rounded-b-2xl">
          <EmojiHappyIcon className="h-8" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="border-none bg-transparent flex-1 focus:ring-0 outline-none"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={sendComment}
            className=" font-light text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
