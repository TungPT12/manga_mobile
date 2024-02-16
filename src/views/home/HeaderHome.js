import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Text, View } from 'react-native';
import { faAlignJustify, faHeart } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header/Header';

function HeaderHome() {
    return (
        <Header>
            <View style={{
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <FontAwesomeIcon icon={faAlignJustify} size={32} />
                <FontAwesomeIcon icon={faHeart}
                    size={32}
                    color='red'
                />
            </View>
        </Header>
    );
}

export default HeaderHome;