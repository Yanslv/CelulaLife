import React, { useEffect, useState} from "react"
import { Text, View } from "react-native"
import { makeRequest } from "../../services/fecth";

export const Relatorios = () => {

  const [relatorios, setRelatorios] = useState([]);

  async function getRelatorios(){
    const response = await makeRequest('/relatorios/index');
    const { data, status } = response;
    setRelatorios(prevState => [...prevState, data??[]])
  }

  useEffect(() => {
    getRelatorios();
  })
  

  return (
    <View>
      <Text>
        Teste de relatório
      </Text>
    </View>
  )
  };