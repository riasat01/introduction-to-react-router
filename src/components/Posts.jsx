import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>Posts: {posts.slice(0,20).length}</h2>
            {
                posts.slice(0,20).map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;