import Navbar from "../components/navbar"
import { Link } from "react-router-dom"
import "./cheryl.css"

const Homepage = () => {
    return(
        <div className="homepageBody">
            <Navbar/>
            <div className="containter left">
                <div>
                    <img src="/images/toyota.png" className="title"></img>
                </div>
                <div>
                    <p className="subTitle">EcoVision</p>
                </div>
                <div>
                    <p className="text">Clear Insights, Efficient Futures.</p>
                </div>
                <div>
                    <Link to="/analyze">
                    <button className="analyze">
                        Analyze
                    </button>
                    </Link>
                    <Link to="/upload">
                    <button>
                        Upload
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage