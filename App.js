import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/views/home/Home';
import { SafeAreaView, View } from 'react-native';
import DetailManga from './src/views/detail/DetailManga';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='home'
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='detail'
          component={DetailManga}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  );
}
