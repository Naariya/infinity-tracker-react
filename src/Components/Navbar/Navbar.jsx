import './Navbar.css';
import Logo from '../Logo/Logo';
import { Link } from "react-router-dom";


const Navbar = () => {

    return (
    <div>
        <section id="navbar">
            <div className="it-navbar">
                <div className="nav-img">
                    <Link to='/'>
                    <Logo imgSrc='./images/infinity-svgrepo-com.svg'/>
                    </Link>
                    <p> Infinity Tracker</p>
                </div>
                <div className="nav-list">
                    <Link to="/">
                    <Logo imgSrc="./images/add-svgrepo-com.svg" />
                    </Link>
                    <Link to="/history">
                    <Logo imgSrc="./images/history-svgrepo-com.svg" />
                    </Link>
                    <Logo imgSrc="./images/profile-svgrepo-com.svg" />
                    <Logo imgSrc="./images/menu-svgrepo-com.svg" />
                </div>
            </div>
        </section>
    </div>
    )
}

export default Navbar;