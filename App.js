import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/views/home/Home';
import DetailManga from './src/views/detail/DetailManga';
import MangaImages from './src/views/mangaImage/MangaImages';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import Genres from './src/views/genres/Genres';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
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
          <Stack.Screen
            name='manga'
            component={MangaImages}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='genres'
            component={Genres}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
