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

const Upload = () => {
    return (
        <div>
            <Navbar />
            <div style={styles.container}>
                <Box>
                    <p>Upload</p>
                </Box>
            </div>
        </div>
    );
};

export default Upload;
