import Navbar from "../components/navbar"
import Box from "../components/box"
import "animate.css"

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

const Upload = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <Navbar />
            <div style={styles.container}>
                <Box title="Upload File">
                    <p>test</p>
                </Box>
            </div>
        </div>
    );
};

export default Upload;
