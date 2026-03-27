import React from 'react'; //
import { StyleSheet, Text, View, Image } from 'react-native'; //

// Importando a imagem local da lua
import Lua from './assets/lua.png';

export default function App() {
  return (
    <View style={estilos.container}>

    {/* Título */}
    <Text style={estilos.titulo}>Lua</Text>

    {/* Imagem da lua */}
    <Image source={Lua} style={estilos.img} />

    {/* Novo elemento: Moldura com o conceito da Lua */}
    {/* View usada para criar a borda retangular arredondada e pontilhada */}
    <View style={estilos.molduraConceito}>
    <Text style={estilos.textoConceito}>
    Único satélite natural da Terra e o quinto maior do Sistema Solar.
    </Text>
    </View>

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1, // Preenche toda a tela
    backgroundColor: '#000', // Fundo preto
    alignItems: 'center', // Centraliza horizontalmente
    justifyContent: 'center', // Centraliza verticalmente
    padding: 20,
  },
  titulo: {
    color: '#fff', // Texto branco
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30, // Espaço para a imagem
  },
  img: {
    width: 250, //
    height: 250, //
    marginBottom: 40, // Espaço para a moldura de conceito abaixo
  },
  // Estilo da moldura retangular solicitada
  molduraConceito: {
    width: '90%', // Largura relativa para centralização
    // Propriedades de borda solicitadas: fina, branca e pontilhada
    borderWidth: 1, // Borda fina
    borderColor: '#fff', // Borda branca
    borderStyle: 'dotted', // Borda pontilhada
    // Cantos arredondados solicitados
    borderRadius: 10,
    // Padding: espaço interno para o texto não tocar na borda
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fundo levemente transparente para destaque
  },
  // Estilo da frase breve interna
  textoConceito: {
    color: '#fff', // Fonte branca solicitada
    fontSize: 16,
    textAlign: 'center', // Centraliza as linhas do parágrafo
    lineHeight: 22, // Melhora a legibilidade do texto breve
  }
});
