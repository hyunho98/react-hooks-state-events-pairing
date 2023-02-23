import LikeDislike from "./LikeDislike";
import HideComments from "./HideComments";

function Header({ video, onHideComments}) {

    return (
        <header>
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <p>
                <LikeDislike likes={video.upvotes} dislikes={video.downvotes} />
                <HideComments onHideComments={onHideComments} />
            </p>
        </header>
    )
}

export default Header;