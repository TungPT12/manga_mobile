import { Text, View } from 'react-native';
import styles from './HeaderCss';
import { Shadow } from 'react-native-shadow-2';

function Header({ children }) {
    return (
        <View style={styles.headerContainer}>
            <Shadow startColor='#fff' sides={false}
                // containerViewStyle={{ marginVertical: 20 }}
                distance={0}
                endColor='#dcdcdc'

                style={{
                    height: 50,
                    width: '100%',
                    zIndex: 1,
                }}>
                {children}
            </Shadow>
        </View>
    );
}

export default Header;