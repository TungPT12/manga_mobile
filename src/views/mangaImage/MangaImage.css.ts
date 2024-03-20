import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight
    },
    text: {
        fontSize: 18,
        fontWeight: '400'
    }
})

export default styles;