const styles = {
    box: {
        backgroundColor: "white",
        justifyContent: "flex-start", // Align content to the top
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column", // Stack main content vertically
        alignItems: "flex-start", // Align items to the left
        marginBottom: "30px",
        paddingTop: "10px",
        paddingBottom: "10px",
    },
    titleContainer: {
        display: "flex",
        alignItems: "center", 
        width: "100%", 
        paddingLeft: "30px",
        paddingRight: "30px",
        marginTop: "20px",
        marginBottom: "20px",
    },
    title: {
        fontSize: "40px", 
        fontWeight: "bold",
        margin: 0, 
        fontFamily: "Work Sans",
    },
    subtitle: {
        fontSize: "18px", 
        marginLeft: "20px", // Space between title and subtitle
        color: "black", 
        marginTop: "20px",
        marginBottom: "0px",
        fontFamily: "Raleway",
    },
    divider: {
        height: "5px",
        width: "100%",
        backgroundColor: "rgba(143, 27, 47, 0.3)",
    },
};

const Box = ({ title, subtitle, children, customTitleColor = "black" }) => {
    return (
        <div style={styles.box}>
            {(title || subtitle) && (
                <div style={styles.titleContainer}>
                    {title && <p style={{ ...styles.title, color: customTitleColor }}>{title}</p>}
                    {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
                </div>
            )}
            {(title || subtitle) && <div style={styles.divider} />}
            <div style={styles.children}>{children}</div>
        </div>
    );
};

export default Box;
