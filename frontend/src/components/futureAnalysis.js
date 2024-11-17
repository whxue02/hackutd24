const styles = {
    text: {
        margin: "20px",
        paddingTop: "20px",
    }
}

const currentAnalysis = ({ type, addedData = {} }) => {
    return (
        <p style={styles.text}>This is where the future analysis will go</p>
    );
};

export default currentAnalysis;
