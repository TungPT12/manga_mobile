import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import MangaCard from '../../components/MangaCard/MangaCard';
import HeaderHome from './HeaderHome';
import { getMangasApi } from '../../apis/manga';

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
                keyExtractor={(item, index) => item._id}
                data={mangas}
                numColumns={2}
                key={2}
                renderItem={({ item }) => {
                    return <MangaCard navigation={navigation}
                        authors={item.authors}
                        id={item._id}
                        title={item.title}
                        url={item.image}
                        otherNames={item.otherNames}
                        status={item.status}
                        types={item.types}
                        summary={item.summary}
                    />
                }}
            />
        </View>
    );
}

export default Home;