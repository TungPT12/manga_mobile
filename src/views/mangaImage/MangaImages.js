import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import MangaImage from '../../components/MangaImage/MangaImage';
import styles from './MangaImageCss';
import { getImagesByChapterIdApi } from '../../apis/image';
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';

function MangaImages({ navigation, route }) {
    const [images, setImages] = useState([])
    const { idChapter } = route.params;
    const renderMangaImage = (image) => {
        return <MangaImage
            name="Tung"
            key={image._id}
            url={image.secure_url}
            height={image.height}
            width={image.width}
        />
    }

    const getImagesByChapterId = (chapterId) => {
        getImagesByChapterIdApi(chapterId).then((response) => {
            if (response.status != 200) {
                throw new Error(JSON.stringify(response.error))
            }
            return response.data;
        }).then((data) => {
            setImages(data)
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        getImagesByChapterId(idChapter);
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                renderItem={({ item }) => {
                    return <MangaImage
                        name="Tung"
                        key={item._id}
                        url={item.secure_url}
                        height={item.height}
                        width={item.width}
                    />
                }}
            />
        </View>
    );
}

export default MangaImages;