import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {userId, id, title, body} = post;
    const navigat = useNavigate();
    const handleBack = () => {
        navigat(-1); //-1 for one step back navigation
    }
    return (
        <div>
            <p>Post ID: {id}</p>
            <p>User id: {userId}</p>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;