import { StatusBar, StyleSheet } from "react-native";

const style = StyleSheet.create({
    detailContainer: {
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 4,
        // height: '100%',
        paddingBottom: 1,
        flex: 1
    },
    image: {
        backgroundColor: '#000',
        justifyContent: 'flex-start',
        top: 0,
        flex: 1,
        height: 175,
        resizeMode: 'cover',
        marginRight: 4,
    },

    infoManga: {
        flex: 2
    },
    name: {
        fontSize: 32,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 14,
        textTransform: "capitalize"
    },
    text: {
        fontSize: 16,
        flex: 1,
    },
    otherName: {
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        marginBottom: 14,
    },
    authors: {
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        marginBottom: 14,
    },
    textAuthors: {
        fontSize: 16,
        flex: 1,
        textTransform: "capitalize"
    },
    status: {
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        marginBottom: 14,
    },
    types: {
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row'
    },
    icon: {
        marginRight: 8,
        color: '#D3D3D3'
    },
    action: {
        marginTop: 4,
        justifyContent: "space-around",
        flexDirection: 'row'
    }
})

export default style