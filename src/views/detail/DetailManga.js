import React, { useEffect, useState } from 'react';
import { Button, Image, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import styles from './DetailMangaCss';
import HeaderDetail from './HeaderDetail';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock, faHeart, faPlusCircle, faTags, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import CardChapter from '../../components/CardChapter/CardChapter';
import { getChaptersByMangaIdApi } from '../../apis/chapter';
function DetailManga({ navigation, route }) {
    const [chapters, setChapters] = useState([])
    const [activeTabs, setActiveTabs] = useState({
        listChapterTab: true,
        introduceTabs: false,
    })
    const { id, url, title, authors, otherNames, status, types, summary } = route.params;

    const formatTypes = (types) => {
        return types.map((type, index) => {
            return type.name;
        }).join(' - ')
    }

    const getChaptersByMangaId = (id) => {
        getChaptersByMangaIdApi(id).then((response) => {
            if (response.status != 200) {
                throw new Error(JSON.stringify(response.error))
            }
            return response.data;
        }).then((data) => {
            setChapters(data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const renderChapters = (chapters) => {
        return chapters.map((chapter) => {
            return <CardChapter
                key={chapter._id}
                navigation={navigation}
                idChapter={chapter._id}
                chapterNumber={chapter.chapterNumber}
            />
        })
    }

    useEffect(() => {
        getChaptersByMangaId(id)
    }, [])

    return (
        <View style={styles.detailContainer}>
            <HeaderDetail
                navigation={navigation}
            />
            <View style={{
                flex: 1
            }}>
                <ScrollView
                    style={{
                        height: '100%'
                    }}
                >
                    <Text style={styles.name}>
                        {title}
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: url
                            }} />
                        <View style={styles.infoManga}>
                            <View style={styles.otherName}>
                                <FontAwesomeIcon icon={faPlusCircle} size={22} style={styles.icon} />
                                <Text numberOfLines={1} style={styles.text}>{otherNames.join(' - ')}</Text>
                            </View>
                            <View style={styles.authors}>
                                <FontAwesomeIcon icon={faUserCircle} size={22} style={styles.icon} />
                                <Text numberOfLines={1} style={styles.textAuthors}>{authors}</Text>
                            </View>
                            <View style={styles.status}>
                                <FontAwesomeIcon icon={faClock} size={22} style={styles.icon} />
                                <Text numberOfLines={1} style={styles.text}>{status}</Text>
                            </View>
                            <View style={styles.types}>
                                <FontAwesomeIcon icon={faTags} size={22} style={styles.icon} />
                                <Text numberOfLines={1} style={styles.text}>{formatTypes(types)}</Text>
                            </View>
                            <View style={styles.action}>
                                <Button
                                    onPress={() => {
                                        navigation.navigate('manga')
                                    }}
                                    title='Đọc từ đầu'
                                />
                                <Button
                                    title='Đọc mới nhất'
                                />
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={styles.wrapTabs}>
                            <TouchableHighlight underlayColor='#e8e8e8' onPress={() => {
                                setActiveTabs({
                                    introduceTabs: false,
                                    listChapterTab: true
                                })
                            }} style={{
                                ...styles.tabs,
                                borderBottomColor: activeTabs.listChapterTab ? '#f4bb28' : '#fff',
                                flex: 2
                            }}>
                                <Text style={styles.textTabs}>Danh sách chương</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor='#e8e8e8' onPress={() => {
                                setActiveTabs({
                                    introduceTabs: true,
                                    listChapterTab: false
                                })
                            }} style={{
                                ...styles.tabs,
                                flex: 1.5,
                                borderBottomColor: activeTabs.introduceTabs ? '#f4bb28' : '#fff',
                            }}>
                                <Text style={styles.textTabs}>Giới thiệu</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{ flex: 1 }}>
                            {renderChapters(chapters)}
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <FontAwesomeIcon icon={faHeart}
                    size={22}
                    color='#b6b6b6'
                    style={{
                        elevation: 10
                    }}
                />
            </View>
        </View>
    );
}

export default DetailManga;