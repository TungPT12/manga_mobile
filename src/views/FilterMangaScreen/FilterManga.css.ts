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

    iconAlignCenter: {
        color: "#9a9a9a",
        transform: [{ rotate: "180deg" }]
    }
})

export default styles;