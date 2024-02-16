import React from 'react';
import { FlatList, View } from 'react-native';
import MangaImage from '../../components/MangaImage/MangaImage';

function MangaImages() {
    const renderMangaImages = () => {
        return [1, 2, 3].map(() => {
            return <MangaImage />
        })
    }
    return (
        <View>
            <FlatList
                data={[1, 2, 3]}
                renderItem={renderMangaImages}
            />
        </View>
    );
}

export default MangaImages;