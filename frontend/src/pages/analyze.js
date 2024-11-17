import Navbar from "../components/navbar"
import Box from "../components/box"
import { useState, useEffect, useRef } from "react";
import "animate.css"

const Analyze = () => {
    const [Tab, setTab] = useState("sedan")
    const [contentHeight, setContentHeight] = useState(0);
    const [analysysHeight, setAnalysisHeight] = useState(0);
    const contentRef = useRef(null);
    const analysisRef = useRef(null)

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
                        {Tab === "sedan" && (
                            <div className="animate__animated animate__fadeIn fade c">
                                sedan
                            </div>
                        )}
                        {Tab === "mini" && (
                            <div className="animate__animated animate__fadeIn fade c">mini</div>
                        )}
                        {Tab === "coupe" && (
                            <div className="animate__animated animate__fadeIn fade c">coupecoupecoupecoupecoupecoupeccoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecooupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupe</div>
                        )}
                        {Tab === "truck" && (
                            <div className="animate__animated animate__fadeIn fade c">truck</div>
                        )}
                        {Tab === "suv" && (
                            <div className="animate__animated animate__fadeIn fade c"></div>
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
                            <div className="animate__animated animate__fadeIn fade c">sedan</div>
                        )}
                        {Tab === "mini" && (
                            <div className="animate__animated animate__fadeIn fade c">mini</div>
                        )}
                        {Tab === "coupe" && (
                            <div className="animate__animated animate__fadeIn fade c">coupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecocoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupecoupe</div>
                        )}
                        {Tab === "truck" && (
                            <div className="animate__animated animate__fadeIn fade c">truck</div>
                        )}
                        {Tab === "suv" && (
                            <div className="animate__animated animate__fadeIn fade c"> </div>
                        )}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Analyze