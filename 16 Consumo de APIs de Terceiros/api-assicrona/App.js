import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Alert } from 'react-native';
import axios from 'axios';

export default function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  async function buscarCep() {
    if (cep.length !== 8) {
      Alert.alert("Erro", "O CEP deve ter 8 dígitos");
      return;
    }
    try {
      // Aqui está a mágica do async/await
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        Alert.alert("Erro", "CEP não encontrado");
        setEndereco(null);
      } else {
        setEndereco(response.data);
      }
    } catch (error) {
      Alert.alert("Erro", "Falha na requisição");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Buscador de CEP (Async)</Text>
      <TextInput style={styles.input} placeholder="Digite o CEP (só números)" value={cep} onChangeText={setCep} keyboardType="numeric" />
      <Button title="Buscar" onPress={buscarCep} />
      {endereco && (
        <View style={styles.resultado}>
          <Text>Logradouro: {endereco.logradouro}</Text>
          <Text>Bairro: {endereco.bairro}</Text>
          <Text>Localidade: {endereco.localidade} - {endereco.uf}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  titulo: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
  resultado: { marginTop: 20, padding: 15, backgroundColor: '#f0f0f0', borderRadius: 5 }
});
