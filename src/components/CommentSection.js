import Comment from "./Comment";

function CommentSection({ comments }) {
    if (!comments) return null
    
    const shownComments = comments.map((comment) => {
        return <Comment key={comment.id} user={comment.user} comment={comment.comment} />
    })

    return (
        <div>
            <h2>{comments.length} Comments</h2>
            {shownComments}
        </div>
    )
}

export default CommentSection;