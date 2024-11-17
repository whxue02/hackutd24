import matplotlib.pyplot as plt

# Sample JSON data
data = {
    "groupedData": {
        "Camry": [{"year": 2021, "fuel_efficiency": 52}, {"year": 2022, "fuel_efficiency": 54},
                    {"year": 2023, "fuel_efficiency": 56}, {"year": 2024, "fuel_efficiency": 58},
                    {"year": 2025, "fuel_efficiency": 60}],
        "Prius": [{"year": 2021, "fuel_efficiency": 58}, {"year": 2022, "fuel_efficiency": 60},
                    {"year": 2023, "fuel_efficiency": 62}, {"year": 2024, "fuel_efficiency": 64},
                    {"year": 2025, "fuel_efficiency": 66}],
        "Avalon": [{"year": 2021, "fuel_efficiency": 44}, {"year": 2022, "fuel_efficiency": 46},
                    {"year": 2023, "fuel_efficiency": 48}, {"year": 2024, "fuel_efficiency": 50},
                    {"year": 2025, "fuel_efficiency": 52}],
        "Mirai": [{"year": 2021, "fuel_efficiency": 67}, {"year": 2022, "fuel_efficiency": 70},
                    {"year": 2023, "fuel_efficiency": 73}, {"year": 2024, "fuel_efficiency": 75},
                    {"year": 2025, "fuel_efficiency": 78}],
        "Corolla": [{"year": 2021, "fuel_efficiency": 33}, {"year": 2022, "fuel_efficiency": 35},
                    {"year": 2023, "fuel_efficiency": 37}, {"year": 2024, "fuel_efficiency": 39},
                    {"year": 2025, "fuel_efficiency": 41}]
    },
    "averageFuelEfficiency": 55.12
}

# Extract grouped data
grouped_data = data["groupedData"]

# Initialize the plot
plt.figure(figsize=(10, 6))

# Plot each model's data
for model, records in grouped_data.items():
    years = [record["year"] for record in records]
    efficiencies = [record["fuel_efficiency"] for record in records]
    plt.plot(years, efficiencies, label=model)

# Add chart elements
plt.title("Fuel Efficiency Over Years by Sedan Model", fontsize=14)
plt.xlabel("Year", fontsize=12)
plt.ylabel("Fuel Efficiency (MPG)", fontsize=12)
plt.legend(title="Sedan Models")
plt.grid(visible=True, linestyle="--", alpha=0.5)

# Show or save the chart
plt.tight_layout()
plt.savefig("fuel_efficiency_chart.png")  # Save as an image if needed
plt.show()
