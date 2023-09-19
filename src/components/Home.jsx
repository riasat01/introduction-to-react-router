import {Outlet, Link} from 'react-router-dom'

const Home = () => {
    const mr = {
        marginRight : '1rem'
    }
    return (
        <div>
            <h3>Nav with reload</h3>
            <nav>
                <a style={mr} href="/">home     </a>
                <a style={mr} href="about">about        </a>
                <a style={mr} href="contact">contact      </a>
                <a style={mr} href="blog">blog     </a>
            </nav>
            <h3>Nav without reload</h3>
            <nav>
                <Link style={mr} to="/">home</Link>
                <Link style={mr} to="about">about</Link>
                <Link style={mr} to="contact">contact</Link>
                <Link style={mr} to="blog">blog</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;