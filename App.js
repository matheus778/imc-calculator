import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Button from './components/Button';
import Input from './components/Input';

export default function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setIMC] = useState(0);

  function calcularImc(peso, altura){
    const imc = peso / (altura* altura);
    return imc.toFixed(2)
  }

  return (
    <SafeAreaView behavior="padding" style={styles.container}>
      <View style={styles.result}>
      <Text style={styles.imcText}>{imc}</Text>
      </View>

      <View style={styles.containerButtons}>
        <Input onChangeText={(text)=>setAltura(text)} /> 
        <Text style={styles.text}>Altura</Text>
      </View>

      <View style={styles.containerButtons}>
        <Input onChangeText={(text)=>setPeso(text)} /> 
        <Text style={styles.text}>Peso</Text>
      </View>

      <Button onPressIn={()=>setIMC(calcularImc(peso,altura))} text="Calcular" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerButtons:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 20
  }, 

  result:{
    flex: 1,
    paddingTop: 200
  },

  imcText: {
    fontSize: 30,
    fontWeight: "bold"
  }
});
