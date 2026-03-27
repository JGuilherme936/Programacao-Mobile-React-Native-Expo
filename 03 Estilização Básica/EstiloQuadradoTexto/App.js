import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Importando a imagem correta conforme a sua lista de arquivos
import Raposa from './assets/raposa.png';

export default function App() {
  return (
    <View style={estilos.container}>

    {/* Imagem da raposa centralizada */}
    <Image source={Raposa} style={estilos.img} />

    {/* Textos em fonte branca e centralizados */}
    <Text style={estilos.titulo}>Raposa</Text>
    <Text style={estilos.subtitulo}>Mamífero da família Canidae.</Text>

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    // Fundo roxo conforme solicitado
    backgroundColor: '#800080',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  titulo: {
    // Fonte branca e centralizada
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitulo: {
    // Fonte branca e centralizada
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
  }
});
