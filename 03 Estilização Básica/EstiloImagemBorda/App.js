import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
    <Text style={estilos.titulo}>Exibindo Borda na Imagem</Text>

    <Image
    source={{ uri: 'https://www.devmedia.com.br/favicon.png' }}
    style={estilos.img}
    />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  img: {
    width: 150,
    height: 150,
    // Propriedades de borda (camelCase)
    borderWidth: 5,         // Espessura da borda
    borderColor: '#0000ff', // Cor da borda (Azul)
borderRadius: 10,       // Arredondamento dos cantos
  }
});
