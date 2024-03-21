import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    home: {
        width: "100%",
        height: "100%",
        marginTop: StatusBar.currentHeight,
        paddingBottom: StatusBar.currentHeight,
        backgroundColor: "#fff",
        position: "relative",
    },

    leftHeader: {
        flexDirection: "row",
        gap: 9
    },

    containerLoadingSpinner: {
        height: "100%",
        justifyContent: "center"
    },
    textTitle: {
        fontSize: 20,
        marginLeft: 24,
    }
})

export default styles;