import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './CardChapterCss';

function CardChapter({ navigation, chapterNumber, idChapter }) {
    return (
        <Pressable onPress={() => {
            navigation.navigate('manga', { idChapter: idChapter })
        }} style={styles.container}>
            <Text style={styles.text}>{chapterNumber}</Text>
        </Pressable>
    );
}

export default CardChapter;