import {Outlet} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <nav>
                <a href="">home     </a>
                <a href="">abour        </a>
                <a href="">contact      </a>
                <a href="">blog     </a>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;