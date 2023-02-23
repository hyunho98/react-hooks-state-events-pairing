import React, { useState } from "react";

function HideComments({ onHideComments }) {
    const [hideButton, setHideButton] = useState("Hide Comments")

    function clickHandler() {
        (hideButton === "Hide Comments") ? setHideButton("Show Comments") : setHideButton("Hide Comments");
        onHideComments()
    }

    return (
        <button
            id="hideComments"
            onClick={clickHandler}
        >{hideButton}</button>
    )
}

export default HideComments;