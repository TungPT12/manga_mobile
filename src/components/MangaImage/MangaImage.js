import React from 'react';
import { Image, Text, View } from 'react-native';

function MangaImage({ url, height, width }) {
    return (
        <View>
            <Image
                source={{
                    uri: url
                }}
                style={{
                    width: '100%',
                    aspectRatio: width / height,
                    resizeMode: 'contain'
                }}
            />

        </View>
    );
}

export default MangaImage