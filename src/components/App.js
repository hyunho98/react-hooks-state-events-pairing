import React, { useState } from "react";
import video from "../data/video.js";
import Header from "./Header";
import CommentSection from "./CommentSection";

function App() {
  const [comments, setComments] = useState(video.comments)
  console.log("Here's your data:", video);

  function toggleComments() {
    comments ? setComments(null) : setComments(video.comments)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <Header video={video} onHideComments={toggleComments}/>
      <CommentSection comments={comments} />
    </div>
  );
}

export default App;
