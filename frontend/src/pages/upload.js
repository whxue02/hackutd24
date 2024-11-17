import Navbar from "../components/navbar";
import Box from "../components/box";
import "./cheryl.css"
import "animate.css";
import { useSearchParams, Link } from "react-router-dom";

const styles = {
    container: {
        backgroundColor: "#EEEEEE",
        justifyContent: "center",
        padding: "30px",
        alignItems: "center",
        height: "100vh",
        margin: 0,
    },
    uploadBox: {
        // Keep existing styles for flex centering
        border: "2px dashed rgba(143, 27, 47, 0.3)",
        borderRadius: "15px",
        width: "400px",
        height: "250px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        margin: "20px",
        cursor: "pointer",
        transition: "background-color 0.2s",
    },
    uploadBoxHover: {
        backgroundColor: "#F5F5F5", // Light background on hover
    },
    icon: {
        fontSize: "50px",
        color: "#8F1B2F", // Icon color
        marginBottom: "10px",
    },
    heading: {
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "5px",
    },
    subtext: {
        fontSize: "14px",
        color: "gray",
    },
    children: {
        paddingLeft: "30px",
        paddingRight: "30px",
        marginTop: "20px",
        marginBottom: "20px",
    },
};

const Upload = () => {
    const [searchParams] = useSearchParams();
    const fileParam = searchParams.get("file");
    console.log("file:", fileParam);

    const redirectToFile = (value) => {
        const url = new URL(window.location.href);
        url.searchParams.set("file", value); 
        window.location.href = url.toString(); 
    };

    const handleFileChange = (event) => {
        console.log("File input triggered!"); 
        const file = event.target.files[0]; 
        if (file) {
            console.log("Selected file:", file.name);
            redirectToFile(file.name);
        } else {
            console.log("No file selected");
        }
    };

    const handleBrowse = () => {
        console.log("Browse clicked!");
        const fileInput = document.getElementById("fileInput");
        if (fileInput) {
            fileInput.click(); 
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault(); 
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            console.log("Dropped file:", file.name);
            redirectToFile(file.name);
        } else {
            console.log("No file dropped.");
        }
    };

    return (
        <div className="animate__animated animate__fadeIn backgroundgrey">
            <Navbar />
            {/* There is no file uploaded, awaiting upload*/}
            {!fileParam && 
                <div className="container c">
                <div className="analyzeBox">
                    <div className="headerRow">
                        <p className="trendsTitle centerText">Upload File</p>
                    </div>
                    <div
                        className="upload-box"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        <i className="fas fa-file-upload" style={styles.icon}></i>
                        <p style={styles.heading}>Drag & Drop</p>
                        <p style={styles.subtext}>
                            or{" "}
                            <span
                                style={{ color: "#8F1B2F", cursor: "pointer" }}
                                onClick={handleBrowse}
                            >
                                browse
                            </span>
                        </p>
                        <input
                            type="file"
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                            id="fileInput"
                        />
                    </div>
                </div>
            </div>}
            {/* There is a file uploaded */}
            { fileParam && 
            <div className="container c">
                <div className="analyzeBox">
                    <div className="headerRow">
                        <p className="trendsTitle centerText">Upload File</p>
                    </div>
                    <div className="">
                        <p className="uploadSubtitle">Visual Representation</p>
                        <img src="/images/landing.svg" className="graph"></img>
                        <p className="uploadSubtitle">Analysis</p>
                        <p className="uploadContent">cheryl wangcheryl wangcheryl wangcheryl wangcheryl wangcheryl wangcheryl wangcheryl wangcheryl wangcheryl wangcheryl wangcheryl wangcheryl wangcheryl wangcheryl wangcheryl wangcheryl wangcheryl wangcheryl wangcheryl wangcheryl wangcheryl wangcheryl wang</p>
                        <Link to="/upload" >
                            <button className="cancel">Cancel</button>
                        </Link>

                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default Upload;
