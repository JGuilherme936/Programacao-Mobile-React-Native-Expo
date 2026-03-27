import React from 'react'; // Importação padrão do motor
import { Image, StyleSheet, Text, View } from 'react-native'; // Peças da biblioteca

export default function App() {
  return (
    // O container principal que ocupa a tela toda
    <View style={estilos.container}>

    <Text style={estilos.titulo}>Atividade de Fixação 01</Text>

    {/* Imagem remota: exige largura e altura obrigatórias */}
    <Image
    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    style={estilos.logo}
    />

    <Text style={estilos.descricao}>
    Engenharia de Computação - 6º Período{"\n"}
    Desenvolvimento Mobile com React Native
    </Text>

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1, // Faz a View esticar por toda a tela
    backgroundColor: '#f0f4f7',
    alignItems: 'center', // Centraliza na horizontal
    justifyContent: 'center', // Centraliza na vertical
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20, // Respiro entre título e imagem
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50, // Deixa a imagem redonda
    borderWidth: 2,
    borderColor: '#61dafb',
  },
  descricao: {
    marginTop: 20, // Afasta o texto da imagem
    fontSize: 16,
    textAlign: 'center', // Centraliza as linhas do parágrafo
    lineHeight: 24,
    color: '#666',
  },
});
