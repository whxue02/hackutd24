# Toyota EcoVision
### Submission to [HackUTD 2024](https://devpost.com/software/team-registration-qzx0mf)

## What Is EcoVision ⛽️
EcoVision is an innovative app designed to empower Toyota employees and customers with cutting-edge tools for analyzing vehicle fuel economy data from 2021 to 2025. Combining sleek historical data visualizations, AI-driven predictions powered by SambaNova, and advanced image parsing for diagnostic insights, EcoVision AI streamlines fuel efficiency analytics. 
- **Current Analysis:** Provides detailed insights into fuel consumption trends (e.g., miles per gallon) for various vehicle types (sedans, SUVs, trucks, etc.) using historical data from 2021 to 2025.
- **Future Analysis:** Predicts future fuel efficiencies for 2026 and beyond using advanced analytics powered by S NOA, aiding long-term planning and sustainability efforts.
- **File Upload:** Allows users to upload vehicle data files (e.g., OBD II data) for analysis, with drag-and-drop functionality and instant processing to generate actionable insights.

Whether uncovering trends or identifying performance bottlenecks, the app redefines decision-making for smarter, eco-friendly automotive strategies.

## How Does It Work 🛠️
- **Analysis:** This project integrates the SambaNova API to create current and future analysis of fuel consumption.
- **Frontend:** The frontend of the application relies on React.js and Pinata API to create charts—using React Charts—and administer file uploads through Multer for the OBD-II data. 
- **Database:** Our project utilzes MongoDB to store the Toyota car information, which is accessed by our SambaNova analysis integration through Axios.

## What We Learned 🧠
- Leveraging corportation resources for vehicle data
- File upload and analysis using AI
- MongoDB Integration with React Charts

## Challenges We Faced 🚔
- Integration of Pinata API with our React based tech stack
- PyScripts use for chart generation in our React App proved to be out-of-date
- Struggles with optimizing database queries and ensuring efficient data retrieval and storage in MongoDB.


## Whats Next? 🚀
- Further integration of Deep Reasoning Models like Deepseek R1 to drive analysis and predictions
- AI Chatbot for specific questions regarding the comparison of fuel economies
- Increased database size that spans more than half a decade for better predictions
- Integration of end-to-end encrpyted OBD-II file uploads

**EcoVision**: Driving the future, one fuel-efficient mile at a time! 🚗⚡️

Developed by Sai Chauhan, Jonathan Lewis, Ishita Saran, and Cheryl Wang
