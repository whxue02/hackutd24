import React, { useState } from "react";
import Navbar from "../components/navbar";
import "./cheryl.css";
import "animate.css";
import { useSearchParams, Link } from "react-router-dom";
import UploadAnalysis from "../components/uploadAnalysis";

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
        backgroundColor: "#F5F5F5",
    },
    icon: {
        fontSize: "50px",
        color: "#8F1B2F",
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
    const [searchParams, setSearchParams] = useSearchParams();
    const fileParam = searchParams.get("file");
    const [uploadStatus, setUploadStatus] = useState("");


    const handleFileChange = async (event) => {
        console.log("File input triggered");
        const file = event.target.files[0];
        if (file) {
            console.log("Selected file:", file.name);


            const formData = new FormData();
            formData.append("file", file);


            try {
                // Send the file to the backend
                const response = await fetch("http://localhost:4000/upload", {
                    method: "POST",
                    body: formData,
                });


                const data = await response.json();
                if (response.ok) {
                    console.log("Upload successful:", data);
                    setUploadStatus("File uploaded successfully!");
                    setSearchParams({ file: data.filePath });
                } else {
                    console.log("Upload failed:", data.message);
                    setUploadStatus(`Upload failed: ${data.message}`);
                }
            } catch (error) {
                console.error("Error uploading file:", error);
                setUploadStatus("Error uploading file. Please try again.");
            }
        } else {
            console.log("No file selected");
            setUploadStatus("No file selected.");
        }
    };


    const handleBrowse = () => {
        console.log("Browse triggered");
        const fileInput = document.getElementById("fileInput");
        if (fileInput) {
            fileInput.click();
        }
    };


    const handleDragOver = (event) => {
        event.preventDefault();
    };


    const handleDrop = async (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            console.log("Dropped file:", file.name);
            // You can handle drop functionality here
        } else {
            console.log("No file dropped.");
        }
    };


    return (
        <div className="animate__animated animate__fadeIn backgroundgrey">
            <Navbar />
            {!fileParam ? (
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
                </div>
            ) : (
                <div className="container c">
                    <div className="analyzeBox">
                        <div className="headerRow">
                            <p className="trendsTitle centerText">Upload File</p>
                        </div>
                        <div>
                            {/*<p className="uploadSubtitle">Visual Representation</p>*/}
                            <img src="/images/landing.svg" className="graph" alt="Uploaded file" />
                            <p className="uploadSubtitle">Analysis powered by Samba Nova</p>
                                <UploadAnalysis type="upload" text='Although it is true that the sources do not contain sufficient information to predict future fuel levels or fully analyze fuel consumption patterns for the 2009 Toyota Corolla (car11), the fuel level data can still be examined for potential patterns and insights. 
                                The fuel level data is presented as a percentage, ranging from as low as "22,70%" to as high as "97,60%."
                                The data frequently shows the fuel level decreasing over consecutive readings, suggesting fuel consumption during these periods. For example, between timestamps 1500303828408 and 1500303863919, the fuel level steadily decreased from "56,50%" to "38,00%".
                                However, there are also instances where the fuel level remains relatively stable over multiple readings, hinting at periods where the car might have been stationary or not driven extensively. For example, between timestamps 1500120291136 and 1500120307172, the fuel level remained constant at -100%.
                                While the data lacks direct information about driving conditions, its reasonable to assume that instances of rapid fuel level decline could potentially correlate with periods of more intensive driving, such as highway travel.
                                Conversely, gradual fuel level decreases might indicate less demanding driving conditions, like city driving.
                                The fuel level data alone cannot confirm these assumptions. More comprehensive data, including vehicle speed, engine load, and distance traveled, would be necessary to draw definitive conclusions about driving conditions and their impact on fuel consumption.'/>
                            <Link to="/upload">
                                <button className="cancel">Cancel</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default Upload;