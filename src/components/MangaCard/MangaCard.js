import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './MangaCardCss';

function MangaCard({ navigation, url, title, id, authors, otherNames, status, types, summary }) {
    return (
        <View style={styles.mangaCardContainer}>
            <Image
                source={{
                    uri: url
                }}
                style={styles.image}
            />
            <Pressable onPress={() => {
                navigation.navigate('detail', {
                    id: id,
                    url: url,
                    title: title,
                    authors: authors,
                    otherNames: otherNames,
                    status: status,
                    types: types,
                    summary: summary
                })
            }}>
                <Text style={styles.mangaName}>{title}</Text>
            </Pressable>
        </View>
    );
}

export default MangaCard;