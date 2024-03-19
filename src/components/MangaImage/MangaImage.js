import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Image from 'react-native-image-auto-height';
function MangaImage({ url }) {
    return (
        <View style={{
            backgroundColor: "#000"
        }}>
            <Image
                source={{
                    uri: url
                }}
                style={{
                    backgroundColor: "#000",
                    width: Dimensions.get('screen').width,
                    height: 'auto',
                }}
            />


        </View>
    );
}

export default MangaImage