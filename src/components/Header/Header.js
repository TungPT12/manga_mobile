import { Text, View } from 'react-native';
import styles from './HeaderCss';
import { Shadow } from 'react-native-shadow-2';

function Header({ children }) {
    return (
        <View style={styles.headerContainer}>
            <Shadow
                // startColor='#dcdcdc'
                // offset={[1, 2]}
                distance={1}
                // endColor='#fff'
                style={{
                    height: 50,
                    width: '100%',
                    zIndex: 0,

                }}>
                {children}
            </Shadow>
        </View>
    );
}

export default Header;