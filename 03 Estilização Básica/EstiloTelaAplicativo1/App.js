import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Importando a imagem do Bart extraída para a pasta assets
import Bart from './assets/bart-img.png';

export default function App() {
  return (
    // Container com o fundo amarelo definido no StyleSheet
    <View style={estilos.container}>

    {/* Imagem do Bart centralizada */}
    <Image source={Bart} style={estilos.img} />

    {/* Título e descrição em branco */}
    <Text style={estilos.titulo}>Bart Simpson</Text>
    <Text style={estilos.subtitulo}>Filho de Homer e Marge Simpson.</Text>

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    /* flex: 1 garante que a cor preencha toda a tela */
    flex: 1,
    /* Cor de fundo amarela */
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  img: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
    /* Aplicando bordas caso o exercício peça destaque na imagem */
    borderRadius: 10,
  },
  titulo: {
    /* Fonte branca para contraste no fundo colorido */
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitulo: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
  }
});
