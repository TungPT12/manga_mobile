import React from 'react';
import { FlatList, Text, View } from 'react-native';
import MangaImage from '../../components/MangaImage/MangaImage';
import styles from './MangaImageCss';

function MangaImages({ navigation, route }) {
    const renderMangaImages = () => {
        return [1, 2, 3].map(() => {
            return <MangaImage />
        })
    }
    return (
        <View style={styles.container}>
            <Text>{route.params.name}</Text>
            <FlatList
                data={[1, 2, 3]}
                renderItem={renderMangaImages}
            />
        </View>
    );
}

export default MangaImages;