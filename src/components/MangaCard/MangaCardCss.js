import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mangaCardContainer: {
        flex: 1 / 2,
        padding: 3
    },

    image: {
        backgroundColor: '#000',
        height: Dimensions.get('screen').height * 0.33,
        resizeMode: 'contain'
    },

    mangaName: {
        textTransform: 'capitalize',
        fontSize: 16,
        fontWeight: '600'
    }
})

export default styles;