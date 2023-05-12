import React from 'react';
import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FactoryRelatorio } from './src/pages/FactoryRelatorio';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getColors } from './Colors';
import { toggleMode } from './src/redux/theme';
import { getTheme, useDarkMode } from './src/hooks/useDarkMode';
import { Login } from './src/pages/Login/login';
import { Relatorios } from './src/pages/Relatorios/relatorios';
// import { useDarkMode } from './src/hooks/useDarkMode';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown:false }}></Stack.Screen>
        <Stack.Screen name="Relatorios" component={Relatorios} options={{ headerShown:false }}></Stack.Screen>
        <Stack.Screen name="FactoryRelatorio" component={FactoryRelatorio} options={{ headerShown:false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
