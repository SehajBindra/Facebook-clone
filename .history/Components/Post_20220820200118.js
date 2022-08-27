import React from "react";
import Moment from "react-moment";

function Post({ id, username, userImg, img, message, timestamp }) {
  return (
    <div className="flex flex-col">
      <div>
        <div className="flex items-center space-x-2">
          <img className="avatar" src={userImg} alt="" />
        </div>
        <div>
          <p className="font-medium">{username}</p>

          <Moment className=" pr-5 text-sm " fromNow>
            {timestamp?.toDate()}
          </Moment>
        </div>
      </div>
    </div>
  );
}

export default Post;
