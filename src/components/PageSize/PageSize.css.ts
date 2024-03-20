import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapPageSize: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        paddingVertical: 8,
    },
    preButton: {
        padding: 2,
        borderWidth: 1,
        borderColor: "#58b2f3",
        backgroundColor: "#ededed"
    },
    nextButton: {
        padding: 2,
        borderWidth: 1,
        borderColor: "#58b2f3",
        backgroundColor: "#ededed"
    },
    angleIcon: {
        color: "#359ee9",
    },
    textPage: {
        borderWidth: 1,
        paddingHorizontal: 8,
        textAlign: 'center',
        borderColor: "#58b2f3",
        color: "#19c3e6",
        padding: 0,
        fontSize: 22,
        height: "100%"
    }
})

export default styles;