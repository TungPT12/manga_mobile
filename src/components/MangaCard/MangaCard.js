import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './MangaCardCss';

function MangaCard({ navigation, url }) {
    return (
        <View style={styles.mangaCardContainer}>
            <Image
                source={{
                    uri: url
                }}
                style={styles.image}
            />
            <Pressable onPress={() => {
                navigation.navigate('detail', { url: url })
            }}>
                <Text style={styles.mangaName}>Tử linh sưeeeeedđdsadsd</Text>
            </Pressable>
        </View>
    );
}

export default MangaCard;