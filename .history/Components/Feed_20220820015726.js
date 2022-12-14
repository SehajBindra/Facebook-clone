import React from "react";
import Stories from "./Stories";

function Feed() {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
      <div>
        {/* stories */}
        <Stories />
        {/* Input */}
        {/* posts */}
      </div>
    </div>
  );
}

export default Feed;
