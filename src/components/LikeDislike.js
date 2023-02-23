import React, { useState } from "react";

function LikeDislike({ likes, dislikes}) {
    const [likeCount, setLikeCount] = useState(likes);
    const [dislikeCount, setDislikeCount] = useState(dislikes);

    return (
        <p>
            <button 
                id="likes" 
                onClick={() => setLikeCount(likeCount + 1)}>
                {likeCount} 👍
            </button>
            <button 
                id="dislikes"
                onClick={() => setDislikeCount(dislikeCount + 1)}>
                {dislikeCount} 👎
            </button>
        </p>
    )
}

export default LikeDislike;