import Image from "next/image";
import React from "react";
import Moment from "react-moment";

function Post({ id, username, userImg, img, message, timestamp }) {
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
      <div className="flex justify-between items-center roundedpb-2xl bg-white shadow-md text-gray-500 border-t">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Post;
