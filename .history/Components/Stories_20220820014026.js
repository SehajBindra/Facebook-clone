import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Sonny Sangha",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },

  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },

  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/fop",
  },

  {
    name: "Mark Zukerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },

  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4w4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard name={story.name} profile={story.profile} src={story.src} />
      ))}
    </div>
  );
}

export default Stories;
