import React from 'react';
import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FactoryRelatorio } from './src/pages/FactoryRelatorio';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getColors } from './Colors';
import { toggleMode } from './src/redux/theme';
import { getTheme, useDarkMode } from './src/hooks/useDarkMode';
// import { useDarkMode } from './src/hooks/useDarkMode';

const Stack = createNativeStackNavigator();

const Login = ({navigation}) => {
  const [isDark, toogleDark] = useDarkMode();
  const colors = getColors(getTheme(isDark));

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.primaryColor , paddingHorizontal: 16 }}>
      { isDark ?

      <View style={{ 
       }}>
        <Image source={require('./src/assets/images/videira-black.png')} style={{ width:120,height:120 }}>
        </Image>
      </View> 

        :

        <View style={{ 
         }}>
          <Image source={require('./src/assets/images/videira_white.png')} style={{ width:120,height:120 }}>
          </Image>
        </View> 
      }
      <View style={{ justifyContent: "space-evenly", alignItems: "flex-start", width: "100%", padding: 10, height: 250 }}>
        <Text
          style={{ fontSize: 24, fontWeight: 600, color: colors.secondaryColor }}
        >
          Login
        </Text>
        <TextInput
          placeholder='Login'
          placeholderTextColor={colors.secondaryColor}
          style={{ borderRadius: 4, width: "100%", height: 40, borderWidth: 0.5, paddingHorizontal: 16, borderColor:colors.secondaryColor }} />
        <TextInput
          placeholder='Senha'
          placeholderTextColor={colors.secondaryColor}
          style={{ borderRadius: 4, width: "100%", height: 40, borderWidth: 0.5, paddingHorizontal: 16, borderColor:colors.secondaryColor }}>
        </TextInput>
        <TouchableOpacity
          onPress={() => 
            { navigation.navigate('FactoryRelatorio')}
          }
          style={{ backgroundColor: "#399cff", width: "100%", justifyContent: "center", alignItems: "center", padding: 10, borderRadius: 4 }}>
          <Text
            style={{ fontSize: 18, fontWeight: 600, color: "#fff" }}
          >
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
      onPress={() => {
        toogleDark();
      }}
      style={{ 
        position: "absolute",
        bottom: 8,
        left: 8,
        padding:8,
        backgroundColor:"#000000a6",
        borderRadius:99,
       }}>
        <Text>
          {isDark ? '☀' : '🌘'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const Relatorios = () => {
  <View>
    <Text>
      Teste de relatório
    </Text>
  </View>
}

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
