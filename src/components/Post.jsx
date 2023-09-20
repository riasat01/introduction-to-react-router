import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div>
            <h2>{title}</h2>
            <Link to={`/post/${id}`}>
                <button>Post Details</button>
            </Link>
        </div>
    );
};

export default Post;