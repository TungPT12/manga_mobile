import React from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import styles from './DetailMangaCss';
import HeaderDetail from './HeaderDetail';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock, faPlusCircle, faTags, faUserCircle } from '@fortawesome/free-solid-svg-icons';
function DetailManga({ navigation, route }) {

    return (
        <View style={styles.detailContainer}>
            <HeaderDetail
                navigation={navigation}
            />

            <View style={{
                // backgroundColor: 'grey',
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
                                uri: "https://cdnntx.com/nettruyen/thumb/van-xui-chon-cong-so.jpg"
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
                        <View style={{
                            // justifyContent
                            flexDirection: 'row',
                            backgroundColor: '#000'
                        }}>
                            <Button
                                style={{
                                    flex: 1,
                                }}
                                title='Danh sách chương'
                            />
                            <Button
                                title='Danh sách chương'
                            />
                        </View>
                        <View style={{
                            flex: 1
                        }}>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsafffffffffffffffffdsa</Text>
                            <Text>asdsafffffffffffffffffdsa</Text>
                            <Text>asdsafffffffffffffffffdsa</Text>
                            <Text>asdsafffffffffffffffffdsa</Text>
                            <Text>asdsafffffffffffffffffdsa</Text>
                            <Text>asdsafffffffffffffffffdsa</Text>
                            <Text>asdsafffffffffffffffffdsa</Text>
                            <Text>asdsafffffffffffffffffdsa</Text>
                            <Text>asdsafffffffffffffffffdsa</Text>
                            <Text>asdsafffffffffffffffffdsa</Text>
                            <Text>asdsafffffffffffffffffdsa</Text>
                            <Text>asdsafffffffffffffffffdsa</Text>
                            <Text>asdsadsa</Text>
                            <Text>asdsadsadddddd</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default DetailManga;