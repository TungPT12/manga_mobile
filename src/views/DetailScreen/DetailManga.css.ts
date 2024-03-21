import { StatusBar, StyleSheet } from "react-native";

const style = StyleSheet.create({
    detailContainer: {
        // marginTop: StatusBar.currentHeight,
        paddingHorizontal: 4,
        paddingBottom: 1,
        flex: 1,
        backgroundColor: '#fff'
    },
    headerDetailManga: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
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
        textTransform: "capitalize",
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
        textTransform: "capitalize",
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
        columnGap: 14,
        marginTop: 8,
        flexDirection: 'row'
    },
    wrapTabs: {
        flexDirection: "row"
    },
    tabs: {
        padding: 8,
        borderBottomWidth: 2,
    },
    textTabs: {
        fontSize: 15,
        textTransform: "uppercase",
        fontWeight: '500',
        textAlign: "center"
    },
    footer: {
        justifyContent: "center",
        height: 40,
        width: '100%',
    }
})

export default style