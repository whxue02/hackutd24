import Navbar from "../components/navbar"
import Box from "../components/box"

const styles = {
    container: {
        backgroundColor: "#EEEEEE",
        justifyContent: "center",
        padding: "30px",
        alignItems: "center",
        height: "100vh",
        margin: 0,
    },
};

const Analyze = () => {
    return(
        <div>
            <Navbar />
            <div style={styles.container}>
                <Box title="Trends" subtitle="2021-2025">
                    <p>Test</p>
                </Box>
                <Box subtitle="2021-2025">
                    <p>Test</p>
                </Box>
            </div>
        </div>
    )
}

export default Analyze