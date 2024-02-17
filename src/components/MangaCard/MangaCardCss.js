import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mangaCardContainer: {
        flex: 1 / 2,
        padding: 3,
        marginBottom: 8,
    },

    image: {
        backgroundColor: '#000',
        height: Dimensions.get('screen').height * 0.33,
        resizeMode: 'cover'
    },

    mangaName: {
        textTransform: 'capitalize',
        fontSize: 16,
        fontWeight: '600'
    }
})

export default styles;