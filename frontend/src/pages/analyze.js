import Navbar from "../components/navbar"
import Chart from "../components/chart"
import CurrentAnalysis from "../components/currentAnalysis"
import FutureAnalysis from "../components/futureAnalysis"
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
            setContentHeight(contentRef.current.clientHeight + 460); 
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
                                    <p className="tabTitle c">Sedans</p>
                                </button>
                            </div>
                            <div className={`tab c ${Tab === "mini" ? 'active' : ''}`}>
                                <button className={Tab==="mini" ? 'active btn' : 'btn'} onClick={()=>handleTab("mini")}>
                                    <p className="tabTitle c">Minivans</p>
                                </button>
                            </div> 
                            <div className={`tab c  ${Tab === "coupe" ? 'active' : ''}`}>
                                <button className={Tab==="coupe" ? 'active btn' : 'btn'} onClick={()=>handleTab("coupe")}>
                                    <p className="tabTitle c">Coupes</p>
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
                            <Chart type="sedan" />
                                <CurrentAnalysis type="sedan" text="From 2021 to 2025, the data reveals a consistent improvement in the fuel efficiency of several car models, particularly in the Toyota Corolla, Toyota Prius, and Toyota Camry. For the Toyota Prius, fuel efficiency remained steady at 50.5 MPG in 2021 and 2022, but it increased to 53 MPG by 2023 and continued at this level through 2024. Similarly, the Prius Eco maintained a high fuel efficiency of 56 MPG from 2021 through 2022. The Toyota Corolla also demonstrated stable fuel efficiency, starting at 32.875 MPG in 2021 and 2022, with a gradual improvement to 34.5 MPG by 2024, followed by a slight dip to 34.25 MPG in 2025.
                                The Toyota Camry saw a steady fuel efficiency between 2021 and 2023, maintaining around 28.1 MPG for the first two years before showing an increase to 28.6 MPG in 2023. However, a significant leap was observed in 2025, where fuel efficiency nearly doubled to 47.6 MPG. The Toyota Crown and Crown Signia, on the other hand, maintained relatively stable fuel efficiencies from 2023 to 2025, with the Crown hovering around 35.5 MPG and the Crown Signia showing a slight improvement to 38 MPG in 2025.
                                In contrast, the Toyota Avalon experienced a slight decrease in fuel efficiency, dropping from 26 MPG in 2021 to 25.5 MPG in 2022. The Toyota C-HR had relatively consistent fuel efficiency between 2021 and 2022, maintaining 29 MPG. Overall, the dataset demonstrates a general trend toward improved fuel efficiency for most models, with notable advancements in the hybrid and eco-friendly categories like the Prius and Corolla." />
                            </div>
                        )}
                        {Tab === "mini" && (
                            <div className="animate__animated animate__fadeIn fade c">
                                <Chart type="minivan" />
                                <CurrentAnalysis type="minivan" text="From 2021 through 2024, the Toyota Sienna has maintained a consistent fuel efficiency of 35.5 miles per gallon (MPG). Given this stability, it's anticipated that the fuel efficiency for 2025 will likely remain the same, continuing the trend of providing reliable and efficient performance. The Sienna’s fuel type, likely a hybrid, remains unchanged throughout these years, ensuring an environmentally friendly approach while maintaining practical fuel economy. As a result, the Toyota Sienna stands out for its ability to sustain a steady fuel efficiency performance over these years, offering consumers both sustainability and cost-effectiveness. Furthermore, its sustainability score is expected to be consistent as Toyota continues to improve the hybrid technology. Thus, the Toyota Sienna represents a dependable option for eco-conscious buyers seeking a balance of performance, efficiency, and sustainability from 2021 to 2025.
                                This analysis reflects the historical data trends and incorporates the expected consistency in the Sienna's performance, making it a solid choice for the near future." />
                            </div>
                        )}
                        {Tab === "coupe" && (
                            <div className="animate__animated animate__fadeIn fade c">
                                <Chart type="coupe" />
                                <CurrentAnalysis type="coupe" text="In the period from 2021 to 2025, the Toyota GR86 is expected to show slight fluctuations in fuel efficiency, with a small decrease from 23.5 MPG in 2022 to 23 MPG in 2024. Despite this decline, the GR86 will continue to be a fuel-efficient choice for drivers seeking performance without significant environmental impact. The model's sustainability score is expected to remain stable, reflecting Toyota’s continued efforts to balance performance with environmental responsibility.
                                For the Toyota GR Corolla, fuel efficiency trends slightly downward over the period, from 24 MPG in 2023 to 23 MPG by 2025. This decrease could reflect evolving design changes or a focus on performance enhancements that prioritize driving experience over fuel efficiency. Nonetheless, the GR Corolla is expected to maintain a relatively high sustainability score, ensuring that its reduced fuel efficiency does not significantly impact its eco-friendliness. Both models are expected to offer a blend of performance and sustainability, with the GR86 retaining more consistent fuel efficiency compared to the GR Corolla, which experiences a gradual decline." />
                            </div>
                        )}
                        {Tab === "suv" && (
                            <div className="animate__animated animate__fadeIn fade c">
                                <Chart type="suv" />
                                <CurrentAnalysis type="suv" text="Between 2021 and 2025, Toyota's car models show a diverse range of fuel efficiencies across different categories. The Toyota Highlander, running on regular fuel, demonstrates a steady fuel efficiency of around 23.33 to 24.33 MPG. This model represents a moderate performance improvement over the years, with only slight yearly variations.
                                The Toyota RAV4, also using regular fuel, maintains a strong fuel efficiency of 29.4 MPG in 2021-2023, but sees a small drop to 29.25 MPG in 2024. The RAV4 Offroad variant shows consistent fuel efficiency, hovering at 28 MPG from 2021 through 2024, which reflects its off-road capabilities and slightly reduced efficiency compared to standard models.
                                In contrast, the Toyota Venza, a hybrid model, offers impressive fuel efficiency, maintaining a steady 39 MPG from 2021 through 2024. This consistent performance indicates Toyota’s strong commitment to providing sustainable, fuel-efficient hybrid options, which stands out significantly from the other models.
                                The Toyota 4Runner and Toyota Sequoia, designed for rugged utility, are notably less fuel-efficient. The 4Runner maintains a fuel efficiency of 17 MPG from 2021-2024, and the Sequoia, though showing some improvement in 2023 (from 14.5 to 21 MPG), remains on the lower end of the efficiency spectrum, indicating its larger size and fuel demands.
                                The Toyota Land Cruiser Wagon and Land Cruiser, both larger vehicles, show similar fuel efficiency around 14 to 23 MPG for their respective years, with the Land Cruiser holding a steady 23 MPG in 2024.
                                Finally, the Corolla Cross demonstrates a solid fuel efficiency of 31 MPG in 2022-2024, maintaining a steady performance in line with its compact design." />
                            </div>
                        )}
                        {Tab === "truck" && (
                            <div className="animate__animated animate__fadeIn fade c">
                                <Chart type="truck" />
                                <CurrentAnalysis type="truck" text="In the years 2021 to 2025, the Toyota Tacoma is expected to maintain its fuel efficiency at around 19.67 MPG for the years 2021 to 2023, before improving slightly to 21.71 MPG in 2024. This steady increase indicates gradual enhancements in fuel efficiency, likely driven by improvements in engine technology and vehicle weight reduction. On the other hand, the Toyota Tundra begins with a fuel efficiency of 14.5 MPG in 2021, which improves significantly to 19.86 MPG by 2022. This trend continues with a small increase to 19.92 MPG in 2024, followed by a return to 19.86 MPG in 2025. These projections suggest that the Tundra will focus on stabilizing its fuel efficiency after initial improvements, likely in response to consumer demand for both performance and economy in large trucks. Both vehicles show gradual progress in fuel efficiency, with the Tacoma leading the way in more noticeable improvements over the years." />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            <div className="container c animate__animated animate__fadeInDown">
                <div className="analyzeBox"  style={{ height: analysysHeight }}>
                    <div className="headerRow">
                        <p className="trendsTitle" style={{ color: "#EB0A1E"}}>EcoVision</p>
                        <p className="trendsSubtitle">Powered by Samba Nova</p>
                    </div>
                    <div className="analysisContent c" ref={analysisRef}>
                        {Tab === "sedan" && (
                            <div className="animate__animated animate__fadeIn fade c">
                                <FutureAnalysis type="sedan" text="In 2026, the fuel efficiency of various car models across different categories is expected to reflect significant advancements, with particular improvements in sustainable models. For example, the Toyota Prius will continue to excel with an expected fuel efficiency of 53 MPG, while the Prius Eco will maintain a high fuel efficiency at 56 MPG. Models like the Toyota Camry will see a notable increase, with the 2026 version anticipated to achieve a fuel efficiency of 47.6 MPG, up from 28.1 MPG in 2025. The Toyota Corolla, a staple in fuel-efficient vehicles, will also continue to improve, reaching a fuel efficiency of 34.25 MPG in 2026. On the other hand, larger models like the Avalon and Crown will maintain their positions as practical, though less fuel-efficient, options with fuel efficiencies of around 35-38 MPG. The sustainability scores are also expected to align with these improvements, reflecting ongoing progress in eco-friendly technologies. As a result, in 2026, these models will not only offer better fuel efficiency but also contribute to a more sustainable automotive landscape."/>
                            </div>
                        )}
                        {Tab === "mini" && (
                            <div className="animate__animated animate__fadeIn fade c">
                                <FutureAnalysis type="minivan" text="To describe the future (2026) predictions for the fuel efficiency and sustainability of the Toyota Sienna, we can expect the following: In 2026, the Toyota Sienna will continue to run on its current fuel type (likely hybrid or gasoline), with an expected fuel efficiency of 35.5 miles per gallon (MPG), similar to previous years. Given the trend, the fuel efficiency will likely remain consistent with the average efficiency observed from 2021 to 2024. Additionally, its sustainability score is predicted to remain steady, reflecting improvements in hybrid and electric vehicle technologies. This makes the Sienna a reliable, fuel-efficient choice for consumers seeking sustainability and cost-effectiveness in the coming years." />
                            </div>
                        )}
                        {Tab === "coupe" && (
                            <div className="animate__animated animate__fadeIn fade c">
                                <FutureAnalysis type="coupe" text="In 2026, the Toyota GR86 is expected to continue running on gasoline fuel, maintaining a fuel efficiency of approximately 23 MPG. The vehicle's sustainability score is predicted to be moderate, reflecting ongoing efforts to reduce its environmental impact. On the other hand, the Toyota GR Corolla, with a slightly higher initial fuel efficiency of 24 MPG in 2023, is forecast to decrease slightly to 23 MPG by 2026. This slight decline in fuel efficiency might be attributed to improvements in performance or changes in the vehicle's design, but the model is anticipated to maintain a comparable sustainability score, reflecting its overall fuel efficiency and eco-friendly features." />
                            </div>
                        )}
                        {Tab === "suv" && (
                            <div className="animate__animated animate__fadeIn fade c">
                                <FutureAnalysis type="suv" text="In 2026, several car models are expected to exhibit significant improvements in fuel efficiency and sustainability. For example, the Toyota Highlander is projected to run on regular fuel with an estimated fuel efficiency of 25 MPG, marking a slight improvement from the 24.33 MPG in 2024. The Toyota RAV4, running on regular fuel, is expected to maintain a fuel efficiency of 30 MPG, showing a consistent trend in its fuel-saving capabilities. Meanwhile, the Toyota Venza, a hybrid, will likely improve its fuel efficiency to 42 MPG, continuing its role as an environmentally friendly choice. Other models like the Toyota 4Runner and Sequoia will maintain their robust performance in terms of fuel efficiency, but will have relatively lower sustainability scores due to their larger sizes and heavier fuel consumption, which will likely remain stable around 17 MPG and 21 MPG respectively. These models will be key players in balancing fuel efficiency with sustainability, as the automotive industry shifts towards greener alternatives." />
                            </div>
                        )}
                        {Tab === "truck" && (
                            <div className="animate__animated animate__fadeIn fade c">
                                <FutureAnalysis type="truck" text="In 2026, the Toyota Tacoma is expected to run on gasoline, with a projected fuel efficiency of 21.7 MPG, marking a notable improvement over previous years. This indicates a continued focus on optimizing fuel consumption in the model. The Tacoma's sustainability score for 2026, though not provided directly, is likely to reflect its eco-friendly performance enhancements. Similarly, the Toyota Tundra, also running on gasoline, is expected to maintain a fuel efficiency of 19.9 MPG in 2026, consistent with its performance in recent years. This suggests that the Tundra will likely continue its trend of moderate fuel efficiency improvements while balancing performance with sustainability efforts. Both vehicles, based on these projections, showcase the ongoing advancements in fuel efficiency and sustainability within their respective categories." />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Analyze