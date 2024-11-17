const styles = {
    text: {
        margin: "40px",
        marginRight: "40px",
        size: "16px",
        textAlign: "left",
    }
}

const UploadAnalysis = ({ type, text = "" }) => {
    return (
        <p style={styles.text}>{text}</p>
    );
};

export default UploadAnalysis;
