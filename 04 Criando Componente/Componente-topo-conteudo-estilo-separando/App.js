import React from 'react';
import { StyleSheet, View } from 'react-native';
import Topo from './components/Topo'; // Aponta para a pasta (ele busca o index.js por padrão)
import Conteudo from './components/Conteudo';

export default function App() {
  return (
    <View style={styles.container}>
    <Topo />
    <Conteudo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
