import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const userDetails = useLoaderData();
    // console.log(userDetails)
    const {name, website} = userDetails;
    return (
        <div>
            <h2>User Name: {name}</h2>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;