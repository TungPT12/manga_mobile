import React from 'react';
import { Dimensions, FlatList, Modal, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import MangaCard from '../../components/MangaCard/MangaCard';
import styles from './HomeCss';
import Header from '../../components/Header/Header';
import HeaderHome from './HeaderHome';

const a = [
    {
        url: 'https://res.cloudinary.com/duotqxfvn/image/upload/v1707904115/axmreavfpsm151nhyrwi.png',
    },
    {
        url: 'https://res.cloudinary.com/duotqxfvn/image/upload/v1707904115/axmreavfpsm151nhyrwi.png',
    },
    {
        url: 'https://res.cloudinary.com/duotqxfvn/image/upload/v1707904115/axmreavfpsm151nhyrwi.png',
    },
    {
        url: 'https://res.cloudinary.com/duotqxfvn/image/upload/v1707904115/axmreavfpsm151nhyrwi.png',
    },
    {
        url: 'https://res.cloudinary.com/duotqxfvn/image/upload/v1707904115/axmreavfpsm151nhyrwi.png',
    },
    {
        url: 'https://res.cloudinary.com/duotqxfvn/image/upload/v1707904115/axmreavfpsm151nhyrwi.png',
    },
    {
        url: 'https://cdnntx.com/nettruyen/thumb/doc-co-tu-linh-su.jpg',
    },
    {
        url: 'https://cdnntx.com/nettruyen/thumb/doc-co-tu-linh-su.jpg',
    },
]

function Home({ navigation }) {
    return (
        <View style={{
            width: '100%',
            marginTop: StatusBar.currentHeight,
            paddingBottom: 50,
            backgroundColor: '#fff'
        }}>
            <HeaderHome />
            <FlatList
                keyExtractor={(item, index) => index}
                data={a}
                numColumns={2}
                key={2}
                renderItem={({ item }) => {
                    return <MangaCard navigation={navigation} url={item.url} />
                }}
            />
        </View>
    );
}

export default Home;