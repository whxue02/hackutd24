const styles = {
    text: {
        margin: "10px",
        marginRight: "20px",
        size: "16px",
        textAlign: "left",
    }
}

const currentAnalysis = ({ type, text = "" }) => {
    return (
        <p style={styles.text}>{text}</p>
    );
};

export default currentAnalysis;
