import React from "react";
import { getColors } from "../../../Colors";
import { getTheme, useDarkMode } from "../../hooks/useDarkMode";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import axios from "axios";
import { makeRequest } from "../../services/fecth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Login = ({navigation}) => {
    const [isDark, toogleDark] = useDarkMode();
    const colors = getColors(getTheme(isDark));
    const videira_black = require('../../assets/images/videira-black.png')
    const videira_white = require('../../assets/images/videira_white.png')

    const nomeDevice = "yan_123"

    

    const signIn = async () => {
        let url = "http://18.222.155.201/api/login";
        let dados = {
          email: "jonh.doe@gmail.com",
          password: "q1w2e3r4",
        };
      
        try {
          const { data, status } = await axios.post(url, dados);
          const { user, token } = data;
          if(status){
            AsyncStorage.setItem('@token',token)
            AsyncStorage.setItem('@user',JSON.stringify(user))
          }
        } catch (error) {
          console.log(error);
            console.log(Object.keys(error.response.data.errors));
        }

    }
  
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.primaryColor , paddingHorizontal: 16 }}>
        { isDark ?
  
        <View style={{ 
         }}>
          <Image source={videira_black} style={{ width:120,height:120 }}/>
        </View> 
  
          :
  
          <View style={{ 
           }}>
            <Image source={videira_white} style={{ width:120,height:120 }}/>
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
              { 
                // navigation.navigate('FactoryRelatorio')
                signIn();
            }
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
  