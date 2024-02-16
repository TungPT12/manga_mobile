import React from 'react';
import { FlatList, Text, View } from 'react-native';
import style from './DetailMangaCss';
import HeaderDetail from './HeaderDetail';
import MangaImage from '../../components/MangaImage/MangaImage';
function DetailManga({ navigation, route }) {
    const renderMangaImages = () => {
        return [1, 2, 3].map(() => {
            return <MangaImage />
        })
    }
    return (
        <View style={style.detailContainer}>
            <HeaderDetail
                navigation={navigation}
            />
            <FlatList
                data={[1, 2, 3]}
                renderItem={renderMangaImages}
            />
        </View>
    );
}

export default DetailManga;