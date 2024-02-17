import React from 'react';
import { Image, View } from 'react-native';

function MangaImage() {
    return (
        <View>
            <Image
                source={{
                    uri: 'https://res.cloudinary.com/duotqxfvn/image/upload/v1707904115/axmreavfpsm151nhyrwi.png'
                }}
                style={{
                    width: '100%',
                    aspectRatio: 600 / 1000,
                    resizeMode: 'contain'
                }}
            />

        </View>
    );
}

export default MangaImage