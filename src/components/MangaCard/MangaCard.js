import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './MangaCardCss';

function MangaCard({ navigation, url, title, id }) {
    return (
        <View style={styles.mangaCardContainer}>
            <Image
                source={{
                    uri: url
                }}
                style={styles.image}
            />
            <Pressable onPress={() => {
                navigation.navigate('detail', { id: id })
            }}>
                <Text style={styles.mangaName}>{title}</Text>
            </Pressable>
        </View>
    );
}

export default MangaCard;