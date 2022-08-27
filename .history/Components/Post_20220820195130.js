import React from "react";

function Post({ id, username, userImg, img, message }) {
  return (
    <div className="flex flex-col">
      <div>
        <div>
          <img className="avatar" src={userImg} alt="" />
        </div>
        <div>
          <p>{username}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
