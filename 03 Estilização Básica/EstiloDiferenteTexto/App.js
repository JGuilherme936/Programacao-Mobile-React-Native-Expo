import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';

// Importando a imagem local do livro conforme sua lista de assets
import LivroImg from './assets/livro.jpg';

export default function App() {
  return (
    // ScrollView para garantir que o conteúdo não corte em telas menores
    <ScrollView style={estilos.container} contentContainerStyle={estilos.content}>

    {/* Imagem da capa centralizada */}
    <Image source={LivroImg} style={estilos.capa} />

    {/* Título: Negrito e Azul */}
    <Text style={estilos.titulo}>Uma Breve História do Tempo</Text>

    {/* Autor: Itálico e Verde */}
    <Text style={estilos.autor}>Stephen Hawking</Text>

    {/* Descrição: Negrito e Vermelho */}
    <Text style={estilos.descricao}>
    Uma exploração acessível sobre a origem e o destino do universo, cobrindo temas como o Big Bang, buracos negros e a teoria das cordas.
    </Text>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1, // Ocupa a tela toda
    backgroundColor: '#fff', // Fundo branco
  },
  content: {
    // Garante a centralização horizontal de todos os itens
    alignItems: 'center',
    // Garante a centralização vertical do bloco inteiro dentro do viewport
    justifyContent: 'center',
    flexGrow: 1, // Necessário para o justifyContent funcionar no ScrollView
    padding: 30,
  },
  capa: {
    width: 180,
    height: 270, // Ajuste leve de proporção para a capa de Hawking
    resizeMode: 'contain',
    marginBottom: 25,
    borderRadius: 8,
  },
  titulo: {
    color: '#0000ff', // Azul
    fontSize: 24,
    fontWeight: 'bold', // Negrito
    textAlign: 'center', // Alinhamento interno do texto
    marginBottom: 10,
  },
  autor: {
    color: '#129227', // Verde
    fontSize: 18,
    fontStyle: 'italic', // Itálico
    textAlign: 'center',
    marginBottom: 25,
  },
  descricao: {
    color: '#ff0000', // Vermelho
    fontSize: 16,
    fontWeight: 'bold', // Negrito
    textAlign: 'center',
    lineHeight: 24, // Melhora a legibilidade do parágrafo
  }
});
