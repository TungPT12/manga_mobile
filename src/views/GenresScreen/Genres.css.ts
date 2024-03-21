import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerDetailManga: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#f3f3f3",
        paddingHorizontal: 9,
    },

    genres: {
        width: '100%',
        backgroundColor: "#ba8d8d",
    },
    genreItem: {
        padding: 4,
        margin: 8,
        zIndex: 2,
        flex: 1 / 2,
        marginHorizontal: 8,
        borderColor: "#4482ed",
        borderWidth: 1,
        borderRadius: 4
    },

    textItem: {
        textAlign: "center",
        padding: 2,
        fontSize: 16
    }
})

export default styles