import React from 'react';
import {Text, TextInput, View} from 'react-native';

const Login = () => {
    return (
      <View style={{ flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"#fff", paddingHorizontal:16 }}>
        <View style={{ justifyContent:"space-evenly", alignItems:"flex-start", width:"100%", padding:10, height:250 }}>
          <Text 
          style={{ fontSize:24, fontWeight:600, color:"#000" }}
          >
            Login
          </Text>
        <TextInput 
        placeholder='Login'
        style={{ borderRadius: 4, width:"100%", height:40, borderWidth:0.5, paddingHorizontal:16 }}>
        </TextInput>
        <TextInput 
        placeholder='Senha'
        style={{ borderRadius: 4, width:"100%", height:40, borderWidth:0.5, paddingHorizontal:16 }}>
        </TextInput>
        <View style={{ backgroundColor:"#0ec7ff", width:"100%", justifyContent:"center", alignItems:"center", padding:10, borderRadius:4}}>
        <Text 
          style={{ fontSize:18, fontWeight:600, color:"#fff" }}
          >
            Entrar
          </Text>
        </View>
          </View>
      </View>
    )
}

const App = () => {
return(
  <Login></Login>
)
}

export default App;
