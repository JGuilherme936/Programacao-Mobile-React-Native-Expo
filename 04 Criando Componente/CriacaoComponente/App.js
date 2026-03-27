import React from 'react';
import { StyleSheet, View } from 'react-native';

// Importando o nosso componente customizado
import CardWindows from './components/CardWindows';

export default function App() {
  return (
    <View style={estilos.container}>

    {/* Usando o componente como se fosse uma tag HTML */}
    <CardWindows />

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Fundo levemente cinza para destacar o card branco
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
