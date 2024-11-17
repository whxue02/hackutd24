import Navbar from "../components/navbar"
import { useState, useEffect, useRef } from "react";
import "animate.css"
import { PyScriptProvider, PyScript } from 'pyscript-react';

const Analyze = () => {
    const [Tab, setTab] = useState("sedan")
    const [contentHeight, setContentHeight] = useState(0);
    const [analysysHeight, setAnalysisHeight] = useState(0);
    const contentRef = useRef(null);
    const analysisRef = useRef(null)

    const [isLoaded, setIsLoaded] = useState(false);

    const loadPyodide = async () => {
        try {
            // Dynamically load the Pyodide script
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/pyodide/v0.23.2/full/pyodide.js";  // Ensure this version matches
            script.onload = async () => {
                try {
                    // Once Pyodide is loaded, initialize it with the correct version
                    const pyodideInstance = await window.loadPyodide({
                        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.2/full/",  // Make sure the indexURL matches the loaded version
                    });
                    console.log("Pyodide is loaded");

                    // Install Python packages using micropip
                    await pyodideInstance.loadPackage("micropip");
                    const micropip = pyodideInstance.pyimport("micropip");
                    await micropip.install('numpy');
                    await micropip.install('matplotlib');
                    pyodideInstance.loadPackage("numpy");
                    pyodideInstance.loadPackage("matplotlib");

                    console.log('Packages installed');

                    // Now you can run Python code
                    const result = await pyodideInstance.runPythonAsync(`
                        import matplotlib.pyplot as plt

                        print("testing!")
                        `);
                    console.log(result);

                    setIsLoaded(true);  // Set the state to indicate Pyodide is ready
                } catch (err) {
                    console.error("Error initializing Pyodide:", err);
                    Error("Error initializing Pyodide. Please try again.");
                }
            };
            script.onerror = () => {
                console.error("Failed to load Pyodide script");
                Error("Failed to load Pyodide script. Please check your network.");
            };
            document.body.appendChild(script);
        } catch (err) {
            console.error("Error loading Pyodide:", err);
            Error("Error loading Pyodide.");
        }
    };

    useEffect(() => {
        loadPyodide(); // Trigger loading Pyodide when the component mounts
    }, []);


    const handleTab = (tab) => {
        setTab(tab);
    }

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.clientHeight + 120); 
        }
    }, [Tab]);

    useEffect(() => {
        if (analysisRef.current) {
            setAnalysisHeight(analysisRef.current.clientHeight + 100); 
        }
    }, [Tab]);

    const config = {
        packages: ['matplotlib', 'numpy'], // Specify the Python packages here
    };

    return(
        <div className="animate__animated animate__fadeIn backgroundgrey">
            <Navbar />
            <div className="container c">
                <div className="analyzeBox animate__animated animate__fadeInDown"  style={{ height: contentHeight }}>
                    <div className="headerRow">
                        <p className="trendsTitle">Trends</p>
                        <p className="trendsSubtitle">2021-2025</p>
                    </div>
                        <div className="tabs c">
                            <div className={`tab c left ${Tab === "sedan" ? 'active' : ''}`}>
                                <button className={Tab==="sedan" ? 'active btn' : 'btn'} onClick={()=>handleTab("sedan")}>
                                    <p className="tabTitle c">Sedan</p>
                                </button>
                            </div>
                            <div className={`tab c ${Tab === "mini" ? 'active' : ''}`}>
                                <button className={Tab==="mini" ? 'active btn' : 'btn'} onClick={()=>handleTab("mini")}>
                                    <p className="tabTitle c">Mini Vans</p>
                                </button>
                            </div> 
                            <div className={`tab c  ${Tab === "coupe" ? 'active' : ''}`}>
                                <button className={Tab==="coupe" ? 'active btn' : 'btn'} onClick={()=>handleTab("coupe")}>
                                    <p className="tabTitle c">Coupe</p>
                                </button>
                            </div>
                            <div className={`tab c  ${Tab === "suv" ? 'active' : ''}`}>
                                <button className={Tab==="suv" ? 'active btn' : 'btn'} onClick={()=>handleTab("suv")}>
                                    <p className="tabTitle c">SUVs</p>
                                </button>
                            </div> 
                            <div className={`tab c right ${Tab === "truck" ? 'active' : ''}`}>
                                <button className={Tab==="truck" ? 'active btn' : 'btn'} onClick={()=>handleTab("truck")}>
                                    <p className="tabTitle c">Trucks</p>
                                </button>
                        </div>
                    </div>
                    <div className="tabContent a c" ref={contentRef}>
                        
                        { isLoaded  && <PyScriptProvider config={config}>
                            {Tab === "sedan" && (
                                <div className="animate__animated animate__fadeIn fade c">
                                    <div>
                                        <h1>Python Integration Example</h1>
                                        <PyScript type="py" src="analyze.py"/>
                                    </div>
                                </div>
                            )}
                        </PyScriptProvider>}
                        {Tab === "mini" && (
                            <div className="animate__animated animate__fadeIn fade c">
                                SAMBA MINIVAN
                            </div>
                        )}
                        {Tab === "coupe" && (
                            <div className="animate__animated animate__fadeIn fade c">
                                SAMBA COUPE
                            </div>
                        )}
                        {Tab === "truck" && (
                            <div className="animate__animated animate__fadeIn fade c">
                                SAMBA TRUCK
                            </div>
                        )}
                        {Tab === "suv" && (
                            <div className="animate__animated animate__fadeIn fade c">
                                SAMBA SUV
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            <div className="container c animate__animated animate__fadeInDown">
                <div className="analyzeBox"  style={{ height: analysysHeight }}>
                    <div className="headerRow">
                        <p className="trendsTitle">EcoVision</p>
                        <p className="trendsSubtitle">Powered by Samba Nova</p>
                    </div>
                    <div className="analysisContent c" ref={analysisRef}>
                        {Tab === "sedan" && (
                            <div className="animate__animated animate__fadeIn fade c">
                                SAMBA SEDAN
                            </div>
                        )}
                        {Tab === "mini" && (
                            <div className="animate__animated animate__fadeIn fade c">
                                SAMBA MINIVAN
                            </div>
                        )}
                        {Tab === "coupe" && (
                            <div className="animate__animated animate__fadeIn fade c">
                                SAMBA COUPE
                            </div>
                        )}
                        {Tab === "truck" && (
                            <div className="animate__animated animate__fadeIn fade c">
                                SAMBA TRUCK
                            </div>
                        )}
                        {Tab === "suv" && (
                            <div className="animate__animated animate__fadeIn fade c">
                                SAMBA SUV
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Analyze