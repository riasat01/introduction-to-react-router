import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const handleDetails = () => {
        navigate(`/post/${id}`);
    }
    const userStyle = {
        border: '2px solid green',
        borderRadius: '1rem',
        backgroundColor: 'slate',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column'
    }

    return (
        <div style={userStyle}>
            <h2 style={{flexGrow: 1}}>{title}</h2>
            <Link to={`/post/${id}`}>
                <button>Post Details</button>
            </Link>
            <button onClick={handleDetails}>Navigate to Details</button>
        </div>
    );
};

export default Post;