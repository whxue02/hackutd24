const styles = {
    box: {
        backgroundColor: "white",
        justifyContent: "flex-start", // Align content to the top
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column", // Stack main content vertically
        alignItems: "flex-start", // Align items to the left
        boxShadow: "3px 3px 0px 0px rgba(0, 0, 0, 0.25)",
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
        fontSize: "20px", 
        marginLeft: "20px", // Space between title and subtitle
        color: "gray", 
        marginTop: "20px",
        marginBottom: "0px",
        fontFamily: "Raleway",
    },
    divider: {
        height: "5px",
        width: "100%",
        backgroundColor: "rgba(143, 27, 47, 0.3)",
    },
    children: {
        paddingLeft: "30px",
        paddingRight: "30px",
        marginTop: "20px",
        marginBottom: "20px",
    },
};

const Box = ({ title, subtitle, children }) => {
    return (
        <div style={styles.box}>
            {(title || subtitle) && (
                <div style={styles.titleContainer}>
                    {title && <p style={styles.title}>{title}</p>}
                    {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
                </div>
            )}
            {(title || subtitle) && <div style={styles.divider} />}
            <div style={styles.children}>{children}</div>
        </div>
    );
};

export default Box;
