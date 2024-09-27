import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [gasolina, setGasolina] = useState('');
  const [alcool, setAlcool] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularVantagem = () => {
    const gasolinaNum = parseFloat(gasolina);
    const alcoolNum = parseFloat(alcool);

    if (!gasolinaNum || !alcoolNum || gasolinaNum <= 0 || alcoolNum <= 0) {
      Alert.alert("Valores inválidos", "Por favor, insira valores válidos para ambos os combustíveis.");
      return;
    }

    const proporcao = alcoolNum / gasolinaNum;

    if (proporcao > 0.7) {
      setResultado('É mais vantajoso abastecer com gasolina.');
    } else {
      setResultado('É mais vantajoso abastecer com álcool.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de Combustível</Text>

      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        keyboardType="numeric"
        value={gasolina}
        onChangeText={setGasolina}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool"
        keyboardType="numeric"
        value={alcool}
        onChangeText={setAlcool}
      />

      <TouchableOpacity style={styles.botao} onPress={calcularVantagem}>
        <Text style={styles.botaoTexto}>Calcular</Text>
      </TouchableOpacity>

      {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  botao: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
