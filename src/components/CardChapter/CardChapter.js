import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './CardChapterCss';

function CardChapter({ navigation }) {
    return (
        <Pressable onPress={() => {
            navigation.navigate('manga', { name: 'Tung' })
        }} style={styles.container}>
            <Text style={styles.text}>Chapter 500</Text>
        </Pressable>
    );
}

export default CardChapter;