import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>

    {/* O componente Text externo define a base do texto */}
    <Text style={estilos.texto}>
    Existem <Text style={estilos.destaque}>palavras</Text> que podem ser destacadas em um parágrafo.
    </Text>

    <Text style={estilos.texto}>
    Isso é feito através do <Text style={estilos.destaque}>aninhamento</Text> de componentes Text.
    </Text>

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  texto: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  // Estilo específico para destacar a palavra
  destaque: {
    fontWeight: 'bold', // Deixa a fonte em negrito
    color: '#129227',    // Aplica a cor verde de destaque
  },
});
