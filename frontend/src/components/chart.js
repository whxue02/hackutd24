import React, { useState, useEffect } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const preprocessData = (data) => {
    // Flatten and group data by year
    const allYears = new Set();
    Object.keys(data).forEach((model) => {
        data[model].forEach((entry) => {
            allYears.add(entry.year);
        });
    });

    // Convert the Set to an array of all years
    const yearsArray = Array.from(allYears).sort((a, b) => a - b);

    // Create a structure with all years and all models
    const groupedByYear = yearsArray.map((year) => {
        const models = Object.keys(data).map((model) => {
            const modelData = data[model].find((entry) => entry.year === year);
            return {
                year,
                fuel_efficiency: modelData ? modelData.fuel_efficiency : null, // Use null if no data for the year
                model,
            };
        });

        return {
            year,
            models,
        };
    });

    return groupedByYear;
};

const CustomTooltip = ({ active, payload, label, modelColors }) => {
    if (active && payload && payload.length) {
        const models = payload[0].payload.models;

        // Sort models by missing data (null values first), then by fuel_efficiency descending
        const sortedModels = [...models].sort((a, b) => {
            if (a.fuel_efficiency === null && b.fuel_efficiency !== null) return -1;
            if (a.fuel_efficiency !== null && b.fuel_efficiency === null) return 1;
            return (b.fuel_efficiency || -Infinity) - (a.fuel_efficiency || -Infinity);
        });

        return (
            <div
                className="custom-tooltip"
                style={{
                    background: "#fff",
                    padding: "10px",
                    border: "1px solid #ccc",
                }}
            >
                <p className="label">{`Year: ${label}`}</p>
                <ul>
                    {sortedModels.map((entry, index) => {
                        const modelColor = modelColors[entry.model] || "black"; // Get color for model or default to black

                        return (
                            <li
                                key={index}
                                style={{
                                    color: modelColor, // Use color from modelColors
                                }}
                            >
                                {`${entry.model}: ${entry.fuel_efficiency !== null
                                    ? entry.fuel_efficiency.toFixed(1)
                                    : "--"
                                    } MPG`}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    return null;
};

const Chart = ({ type, addData = {} }) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [modelColors, setModelColors] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:4000/api/fuel-efficiency/category/${type}`
                );
                const result = await response.json();
                setData(result.groupedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [type]);

    const processedData = preprocessData(data);

    // Generate colors for each model, making sure the same color is used even when data is missing
    useEffect(() => {
        const colors = {};
        Object.keys(data).forEach((model, index) => {
            colors[model] = `hsl(${(index / Object.keys(data).length) * 360}, 70%, 50%)`;
        });
        setModelColors(colors);
    }, [data]);

    return loading ? (
        <p>Loading...</p>
    ) : (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={processedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" type="number" domain={["dataMin", "dataMax"]} />
                <YAxis />
                <Tooltip content={<CustomTooltip modelColors={modelColors} />} />
                <Legend />
                {Object.keys(data).map((model, index) => {
                    return (
                        <Line
                            key={model}
                            type="monotone"
                            dataKey={`models[${index}].fuel_efficiency`}
                            name={model}
                            stroke={modelColors[model]}  // Use consistent color for model
                            strokeWidth={2}
                            isAnimationActive={false}
                            dot={false}  // Optionally hide dots for missing data
                            data={processedData.map((entry) => ({
                                ...entry,
                                models: entry.models.map((m) =>
                                    m.model === model
                                        ? { ...m, fuel_efficiency: m.fuel_efficiency || null }
                                        : m
                                ),
                            }))}
                        />
                    );
                })}
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Chart;
