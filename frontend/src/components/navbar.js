import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
    return(
        <nav className="navbar c">
            <div className="navbar-left">
                    <Link to="/">
                        <img src={"/images/toyotaLogo.png"} alt="logo" className="logo" draggable="false"/>
                    </Link>
            </div>

            <div className='navbar-right'>
                    <Link to="/analyze" className="nav-string">
                        Analyze
                    </Link>
                    <p className="verticalDash">|</p>
                    <Link to="/upload" className="nav-string">
                        Upload
                    </Link>
                </div>
        </nav>
    )
}

export default Navbar