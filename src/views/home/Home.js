import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import MangaCard from '../../components/MangaCard/MangaCard';
import HeaderHome from './HeaderHome';
import { getMangasApi } from '../../apis/manga';
import Header from '../../components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAlignJustify, faHeart } from '@fortawesome/free-solid-svg-icons';

function Home({ navigation }) {
    const [mangas, setMangas] = useState([])
    const getMangas = () => {
        getMangasApi().then((response) => {
            if (response.status != 200) {
                throw new Error(JSON.stringify(response.error))
            }
            return response.data;
        }).then((data) => {
            setMangas(data.data)
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
            // marginTop: StatusBar.currentHeight,
            paddingBottom: StatusBar.currentHeight,
            backgroundColor: '#fff',
            position: 'relative'
        }}>
            {/* <View style={{
                backgroundColor: "#000",
                height: "100%",
                width: '80%',
                position: "absolute",
                zIndex: 2
            }}>
                <Header>
                    <View style={{
                        height: '100%',
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: 'red'
                    }}>
                        <FontAwesomeIcon icon={faAlignJustify} size={28} />
                        <FontAwesomeIcon icon={faHeart}
                            size={28}
                            color='red'
                        />
                        <Text>ádasdasd</Text>
                    </View>
                </Header>
            </View> */}
            <HeaderHome />
            <FlatList
                keyExtractor={(item) => item.id}
                data={mangas}
                numColumns={2}
                key={2}
                renderItem={({ item }) => {
                    return <MangaCard navigation={navigation}
                        authors={item.authors}
                        id={item.id}
                        title={item.title}
                        url={item.thumb}
                        sub_title={item.sub_title}
                        status={item.status}
                        genres={item.genres}
                        summary={item.summary}
                    />
                }}
            />
        </View>
    );
}

export default Home;