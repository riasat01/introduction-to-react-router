import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
    const posts = useLoaderData();

    const postsLayout = {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '1rem'
    }

    return (
        <div>
            <h2>Posts: {posts.slice(0, 20).length}</h2>
            <div style={postsLayout}>
                {
                    posts.slice(0, 20).map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>

        </div>
    );
};

export default Posts;