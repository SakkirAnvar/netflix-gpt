import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video text-white absolute pt-[20%] px-12 bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-2  w-1/4">{overview}</p>
      <div className="mt-3">
        <button className="bg-white text-black p-2 px-4  text-lg  rounded-lg hover:bg-opacity-80">
          ▶︎ Play
        </button>
        <button className="mx-3 bg-gray-500 text-white p-2 px-4  text-lg  rounded-lg hover:bg-opacity-80">
          🛈 More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
