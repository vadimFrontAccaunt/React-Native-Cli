import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import {Context} from './redux/Context';
import {store} from './redux/store';
import LoginScreen from './src/LoginScreen/LoginScreen';
import {MainScreen} from './src/MainScreen/MainScreen';
import {ThecondScreen} from './src/MainScreen/ThecondScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [lang, setLang] = useState(true); // true - eng
  return (
    <Provider store={store}>
      <Context.Provider value={[lang, setLang]}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="MainPage" component={MainScreen} />
            <Stack.Screen name="ThecondPage" component={ThecondScreen} />
            <Stack.Screen name="LoginPage" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Context.Provider>
    </Provider>
  );
};
export default App;