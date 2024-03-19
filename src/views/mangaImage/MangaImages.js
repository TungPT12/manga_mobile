import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import MangaImage from '../../components/MangaImage/MangaImage';
import styles from './MangaImageCss';
import { getImagesByChapterIdApi } from '../../apis/image';

function MangaImages({ navigation, route }) {
    const [images, setImages] = useState([])
    const { idChapter } = route.params;

    const getImagesByChapterId = (chapterId) => {
        getImagesByChapterIdApi(chapterId).then((response) => {
            if (response.status != 200) {
                throw new Error(JSON.stringify(response.error))
            }
            return response.data;
        }).then((data) => {
            setImages(data.data)
        }).catch((error) => {
            console.log(error.message)
        })
    }
    useEffect(() => {
        getImagesByChapterId(idChapter);
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={images}
                renderItem={({ item }) => {
                    return <MangaImage
                        key={item.id}
                        url={item.link}
                    />
                }}
            />
        </View>
    );
}

export default MangaImages;