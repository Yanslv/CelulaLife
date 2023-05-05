import React, { useState, useRef } from 'react'
import { Animated, View, Dimensions, Text, TouchableOpacity, TextInput } from 'react-native'
import { useDarkMode } from '../hooks/useDarkMode';
import { useNavigation } from '@react-navigation/native';

export const FactoryRelatorio = () => {
  const largura = useRef(new Animated.Value(0.0)).current; 
  const altura = useRef(new Animated.Value(0.0)).current;
  const [steps, setSteps] = useState(0);
  const navigation = useNavigation();

  const widthFull = Dimensions.get('window').width;
  const heightFull = Dimensions.get('window').height;

  const [isDark, toogleDark] = useDarkMode();

  const relatorios = [
    {
      nome_relatorio: "Celula #1 ",
      data_criacao: '2023-05-05',
    },
    {
      nome_relatorio: "Celula #2 ",
      data_criacao: '2023-05-10',
    },
  ];

  Animated.sequence([
    Animated.timing(
      largura,
      {
        toValue: widthFull,
        duration: 1000,
        useNativeDriver: false,
      }),
    Animated.timing(
      altura,
      {
        toValue: heightFull,
        duration: 1000,
        useNativeDriver: false,
      }),
  ]).start();

  return (
    <>
    {steps == 0 && (
    <View
      style={{
        borderRadius: 8,
        flex: 1,
        backgroundColor: "#ffffff",
      }}
    >
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 16,
          flex: 1,
        }}
      >
        <View style={{
         marginVertical:24
        }}>
          <Text
            style={{ color: "#000", fontWeight: '600', fontSize: 24 }}
          >
            Lista de Relatório
          </Text>
        </View>
          {relatorios.map(item =>
            <View
              style={{
                backgroundColor: '#fff',
                borderColor: "#CBCBCB",
                borderWidth: 1,
                height: 80,
                marginVertical: 10,
                borderRadius: 4,
                justifyContent: "center",
                paddingHorizontal: 10
              }}
            >
              <View style={{
                alignItems: "flex-start",
              }}>
                <Text
                  style={{ color: "#000", fontWeight: '700', fontSize: 18, }}
                >
                  {item.nome_relatorio}
                </Text>
                <Text
                  style={{ color: "#acacac", fontWeight: '400', fontSize: 18, }}
                >
                  {item.data_criacao}
                </Text>
              </View>
            </View>
          )}
      </View>
      <TouchableOpacity
      onPress={() => {
        setSteps(1)
      }}
        style={{ 
          backgroundColor: "#399cff",
          position: "absolute",
          bottom:8,
          right:8,
          borderRadius: 99, 
          width: 150, 
          paddingHorizontal:4,
          height: 40, 
          justifyContent: "center", 
          alignItems: "center"
         }}
      >
        <Text
         style={{ color: "#fff", fontWeight: '600', fontSize: 18}}>
         + Criar Relatório
        </Text>
      </TouchableOpacity>
    </View>
    )}
      {steps === 1 && (
      <View
      style={{
        borderRadius: 8,
        flex: 1,
        backgroundColor: "#ffffff",
      }}
    >
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 16,
          flex: 1,
        }}
      >
        <View style={{
         marginVertical:24
        }}>
        <Text>
        <Text
            style={{ color: "#000", fontWeight: '600', fontSize: 24 }}
          >
            Criar relatório
           </Text>
          </Text>
         </View>
         <View>
         <Text
            style={{ color: "#000", fontWeight: '400', fontSize: 14, marginBottom:4 }}
          >
            Quantidade de pessoas na equipe:
           </Text>
         <TextInput
          placeholder='0'
          // value={0}
          placeholderTextColor={"#CBCBCB"}
          style={{ borderRadius: 4, width: "100%", height: 40, borderWidth: 0.5, paddingHorizontal: 4, borderColor:"#CBCBCB" }} />
        <TextInput/>
        </View>
        <TouchableOpacity
      onPress={() => {
        setSteps(0)
        // navigation.navigate('Relatorios')
      }}
        style={{ 
          backgroundColor: "#399cff",
          position: "absolute",
          bottom:24,
          left:16,
          right:16,
          borderRadius: 4, 
          // width: "100%", 
          height: 40, 
          justifyContent: "center", 
          alignItems: "center"
         }}
      >
        <Text
         style={{ color: "#fff", fontWeight: '600', fontSize: 18}}>
         Criar 
        </Text>
      </TouchableOpacity>
        </View>
        </View>
      )}
    </>
  )
  
}

