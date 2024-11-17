import Navbar from "../components/navbar";
import Box from "../components/box";
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
        width: "100%",
        height: "250px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
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
        <div>
            <Navbar />
            {/* There is no file uploaded, awaiting upload*/}
            <div style={styles.container}>
            {!fileParam && 
                <Box title="Upload New File">
                    <div
                        style={styles.uploadBox}
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
                </Box>}

            {/* There is a file uploaded */}
            { fileParam && 
                <Box title="Upload">
                    <div style={styles.children}>
                        <div>Visual</div>
                        <div>Analysis</div>
                        <Link to="/upload" >Cancel</Link>
                    </div>
                </Box>
            }
            </div>
        </div>
    );
};

export default Upload;
