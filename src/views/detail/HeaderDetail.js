import React from 'react';
import Header from '../../components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Pressable, ScrollView, Text, View } from 'react-native';

function HeaderDetail({ navigation }) {
    return (
        <Header>
            <View style={{
                height: '100%',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Pressable onPress={() => {
                    navigation.goBack()
                }}>
                    <FontAwesomeIcon icon={faArrowLeft}
                        size={25}
                    />
                </Pressable>
                <Text style={{
                    fontSize: 18,
                    marginLeft: 18,
                    fontWeight: '500'
                }}>Thông tin truyện</Text>
            </View>
        </Header>
    );
}

export default HeaderDetail;