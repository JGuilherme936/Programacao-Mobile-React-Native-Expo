import React from 'react'; //
import { Image, StyleSheet, Text, View } from 'react-native'; //

// Importando a imagem local e dando um "apelido" para ela
// O './' indica a pasta atual e 'assets/' entra na pasta das imagens
import Capa from './assets/capa.png';

export default function App() {
  return (
    <View style={estilos.container}>
    {/* Título e descrição conforme o layout do exercício */}
    <Text style={estilos.titulo}>Guerra do Amanhã</Text>
    <Text style={estilos.descricao}>Gêneros: Ação e ficção</Text>

    {/* Exibindo a imagem local usando o apelido definido no import */}
    {/* Diferente da imagem remota, aqui usamos apenas uma chave */}
    <Image
    source={Capa}
    style={estilos.img}
    />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1, // Faz a View ocupar toda a tela do celular
    backgroundColor: '#fff',
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
  },
  titulo: {
    fontSize: 22, // Tamanho definido no slide 77
    fontWeight: 'bold',
  },
  descricao: {
    marginBottom: 20, // Espaço entre o texto e a imagem
  },
  img: {
    width: 300, // Largura da imagem
    height: 300, // Altura da imagem
  }
});
