import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {userId, id, title, body} = post;
    return (
        <div>
            <p>Post ID: {id}</p>
            <p>User id: {userId}</p>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;