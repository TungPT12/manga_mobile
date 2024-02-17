import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Modal, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import MangaCard from '../../components/MangaCard/MangaCard';
import styles from './HomeCss';
import Header from '../../components/Header/Header';
import HeaderHome from './HeaderHome';
import { getMangasApi } from '../../apis/manga';

const a = [
    {
        url: 'https://res.cloudinary.com/duotqxfvn/image/upload/v1708153919/ubbotdfwpryxvmqhnjcp.jpg',
    },
    {
        url: 'https://cdnntx.com/nettruyen/thumb/doc-co-tu-linh-su.jpg',
    },
    {
        url: 'https://cdnntx.com/nettruyen/thumb/doc-co-tu-linh-su.jpg',
    },
]

function Home({ navigation }) {
    const [mangas, setMangas] = useState([])
    const getMangas = () => {


        getMangasApi().then((response) => {
            if (response.status != 200) {
                throw new Error(JSON.stringify(response.error))
            }
            return response.data;
        }).then((data) => {
            setMangas(data)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getMangas();
    }, [])

    return (
        <View style={{
            width: '100%',
            height: "100%",
            marginTop: StatusBar.currentHeight,
            paddingBottom: StatusBar.currentHeight,
            backgroundColor: '#fff'
        }}>
            <HeaderHome />
            <FlatList
                // style=
                keyExtractor={(item, index) => item._id}
                data={mangas}
                numColumns={2}
                key={2}
                renderItem={({ item }) => {
                    return <MangaCard navigation={navigation} id={item._id} title={item.title} url={item.image} />
                }}
            />
        </View>
    );
}

export default Home;