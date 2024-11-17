import React, { useState, useEffect } from 'react';

const styles = {
    text: {
        margin: "20px",

        paddingBottom: "20px",
        textAlign: "left",
    }
};

/*
const CurrentAnalysis = ({ type, addedData = {} }) => {
    const [data, setData] = useState({});
    const [analysisResult, setAnalysisResult] = useState("This is where the current analysis will go");

    useEffect(() => {
        const fetchData = async () => {
            try {
                // First GET request
                console.log("Fetching category data...");
                const categoryResponse = await fetch(`http://localhost:4000/api/fuel-efficiency/category/${type}`);
                if (!categoryResponse.ok) {
                    throw new Error(`GET Error: ${categoryResponse.status} ${categoryResponse.statusText}`);
                }
                const categoryResult = await categoryResponse.json();
                const groupedData = categoryResult.groupedData || {};
                console.log("Grouped Data:", groupedData);

                // Then POST request
                console.log("Posting to prediction API...");
                const postResponse = await fetch("http://localhost:4000/api/samba/predict/all", {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer cc79ed10-9cd0-4e84-97e1-00efb8d846f8",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ data: groupedData }),
                });
                if (!postResponse.ok) {
                    throw new Error(`POST Error: ${postResponse.status} ${postResponse.statusText}`);
                }
                const postData = await postResponse.json();
                setAnalysisResult(JSON.stringify(postData, null, 2));
            } catch (error) {
                setAnalysisResult(`Failed to fetch data: ${error.message}`);
            }
        };

        fetchData();
    }, [type]);



    return <p style={styles.text}>{analysisResult}</p>;
}*/;


const CurrentAnalysis = ({ type, text = "" }) => {
    return <p style={styles.text}>{text}</p>;
}

export default CurrentAnalysis;
