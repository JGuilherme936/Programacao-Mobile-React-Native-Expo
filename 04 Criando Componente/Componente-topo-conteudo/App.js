import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Topo from './components/Topo';
import Conteudo from './components/Conteudo';

export default function App() {
  return (
    <View style={estilos.container}>
    <StatusBar barStyle="light-content" />
    <Topo />
    <Conteudo />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
