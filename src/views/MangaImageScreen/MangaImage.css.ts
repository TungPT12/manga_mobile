import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // marginTop: StatusBar.currentHeight
    },
    text: {
        fontSize: 18,
        fontWeight: '400'
    },
    headerImageManga: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#f3f3f3",
        paddingHorizontal: 9,
    },
    textHeaderTitle: {
        fontSize: 18,
        fontWeight: "500",
        marginLeft: 24,
    }

})

export default styles;