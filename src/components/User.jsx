import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user;
    const userStyle = {
        border: '2px solid green',
        borderRadius: '1rem',
        backgroundColor : 'slate',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <p style={{flexGrow: 1}}>{phone}</p>
            <Link to={`user/${id}`}>Show user website</Link>
            <Link to={`user/${id}`}>
                <button>Website btn</button>
            </Link>
        </div>
    );
};

export default User;