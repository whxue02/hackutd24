import Navbar from "../components/navbar"
import { Link } from "react-router-dom"
import "./cheryl.css"
import "animate.css"

const Homepage = () => {
    return(
        <div className="homepageBody animate__animated animate__fadeIn">
            <Navbar/>
            <div className="containter left animate__animated animate__fadeInDown">
                <div>
                    <img src="/images/toyota.png" className="title"></img>
                </div>
                <div>
                    <p className="subTitle">EcoVision</p>
                </div>
                <div>
                    <p className="text">Clear Insights, Efficient Futures.</p>
                </div>
                <div className="margin-top20">
                    <Link to="/analyze">
                    <button className="analyze">
                        Analyze
                    </button>
                    </Link>
                    <Link to="/upload">
                    <button className="upload">
                        U
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage