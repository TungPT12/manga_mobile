import React, { useState } from 'react';
import { Button, Image, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import styles from './DetailMangaCss';
import HeaderDetail from './HeaderDetail';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock, faHeart, faPlusCircle, faTags, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import CardChapter from '../../components/CardChapter/CardChapter';
function DetailManga({ navigation, route }) {
    const [activeTabs, setActiveTabs] = useState({
        listChapterTab: true,
        introduceTabs: false,
    })
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
                        Tuw linh su
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: "https://banhkemngonghinh.com/wp-content/uploads/2018/04/56-banh-kem-sinh-nhat-tao-hinhf-3d-mat-doremon.jpg"
                            }} />
                        <View style={styles.infoManga}>
                            <View style={styles.otherName}>
                                <FontAwesomeIcon icon={faPlusCircle} size={22} style={styles.icon} />
                                <Text numberOfLines={1} style={styles.text}>Tu linh suffffffffffffffffdddddddffff</Text>
                            </View>
                            <View style={styles.authors}>
                                <FontAwesomeIcon icon={faUserCircle} size={22} style={styles.icon} />
                                <Text numberOfLines={1} style={styles.textAuthors}>Team nhaf dda -  Than mong</Text>
                            </View>
                            <View style={styles.status}>
                                <FontAwesomeIcon icon={faClock} size={22} style={styles.icon} />
                                <Text numberOfLines={1} style={styles.text}>Đang tiến hành</Text>
                            </View>
                            <View style={styles.types}>
                                <FontAwesomeIcon icon={faTags} size={22} style={styles.icon} />
                                <Text numberOfLines={1} style={styles.text}>Hành động - Phiêu lưu</Text>
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
                        <View style={{
                            flex: 1
                        }}>
                            {
                                [1, 2, 4, 5, 6].map(() => {
                                    return <CardChapter navigation={navigation} />
                                })
                            }
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