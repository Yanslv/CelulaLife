import React, { useState, useRef, useEffect } from 'react'
import { Animated, View, Dimensions, Text, TouchableOpacity, TextInput,ScrollView } from 'react-native'
import { useDarkMode } from '../hooks/useDarkMode';
import { useNavigation } from '@react-navigation/native';
import { handleRequest } from '../services/fecth';


const InputInfo = ({label, grow}) => {
  return(
    <>
    {grow && (
    <View>
      <Text
        style={{ color: "#000", fontWeight: '400', fontSize: 14, marginBottom: 2, }}
      >
        {label}
      </Text>
      <TextInput
        placeholder='Digite sua dificuldade...'
        // value={0}
        placeholderTextColor={"#CBCBCB"}
        style={{ borderRadius: 4, width: "100%", height: 180, borderWidth: 1, paddingHorizontal: 8, borderColor: "#CBCBCB", textAlignVertical:"top"}} />
      <TextInput />
  </View>
    )}
    {!grow && (
    <View>
      <Text
        style={{ color: "#000", fontWeight: '400', fontSize: 14, marginBottom: 2}}
      >
        {label}
      </Text>
      <TextInput
        placeholder='0'
        // value={0}
        placeholderTextColor={"#CBCBCB"}
        style={{ borderRadius: 4, width: "100%", height: 40, borderWidth: 1, paddingHorizontal: 8, borderColor: "#CBCBCB" }} />
      <TextInput />
  </View>
    )}
    </>
    )
  }


export const FactoryRelatorio = () => {
  const largura = useRef(new Animated.Value(0.0)).current;
  const altura = useRef(new Animated.Value(0.0)).current;
  const [steps, setSteps] = useState(0);
  const navigation = useNavigation();

  const widthFull = Dimensions.get('window').width;
  const heightFull = Dimensions.get('window').height;
  const [isDark, toogleDark] = useDarkMode();

  // useEffect(() => {
  //   async function getMaterials() {
  //     let { status, data } = await handleRequest(`http://18.222.155.201/api/users/index`, null);
  //     const items = data.success.map(item => item);
  //     console.log(items)
  //     // setCodLocal(data.codlocal);
  //     // setKit([...items])
  //   }
  //   getMaterials();
  // }, [])



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

  // Animated.sequence([
  //   Animated.timing(
  //     largura,
  //     {
  //       toValue: widthFull,
  //       duration: 1000,
  //       useNativeDriver: false,
  //     }),
  //   Animated.timing(
  //     altura,
  //     {
  //       toValue: heightFull,
  //       duration: 1000,
  //       useNativeDriver: false,
  //     }),
  // ]).start();

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
              marginVertical: 24
            }}>
              <Text
                style={{ color: "#000", fontWeight: '600', fontSize: 24 }}
              >
                Lista de Relatório
              </Text>
            </View>
            {relatorios.map((item, index) =>
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
              bottom: 8,
              right: 8,
              borderRadius: 99,
              width: 150,
              paddingHorizontal: 4,
              height: 40,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{ color: "#fff", fontWeight: '600', fontSize: 18 }}>
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
              paddingHorizontal: 24,
              paddingTop: 16,
              flex: 1,
            }}
          >
            <View style={{
              marginVertical: 12
            }}>
              <Text>
                <Text
                  style={{ color: "#000", fontWeight: '600', fontSize: 24 }}
                >
                  Criar relatório
                </Text>
              </Text>
            </View>
            <ScrollView style={{ marginBottom:48 }} showsVerticalScrollIndicator={false}>
            <View style={{ marginVertical:24 }}>
              <Text style={{ fontWeight:600, color:"#000", fontSize: 18}}>Participantes</Text>
            </View>
            <InputInfo label={"Quantidade de pessoa na equipe"}></InputInfo>
            <InputInfo label={"Quantidade de mebros"}></InputInfo>
            <InputInfo label={"Quantidade de visitantes"}></InputInfo>
            <InputInfo label={"Quantidade de frequentadores"}></InputInfo>
            <View style={{ marginBottom:24}}>
              <Text style={{ fontWeight:600, color:"#000", fontSize: 18}}>Detalhes da célula</Text>
            </View>
            <InputInfo label={"Valor da oferta:"}></InputInfo>
            <InputInfo label={"Data:"}></InputInfo>
            <InputInfo grow label={"Enfrentou alguma dificuldade durante a célula?"}></InputInfo>
            </ScrollView>
            <TouchableOpacity
              onPress={() => {
                setSteps(0)
                // navigation.navigate('Relatorios')
              }}
              style={{
                backgroundColor: "#399cff",
                position: "absolute",
                bottom: 24,
                left: 16,
                right: 16,
                borderRadius: 4,
                // width: "100%", 
                height: 40,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{ color: "#fff", fontWeight: '600', fontSize: 18 }}>
                Criar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

