import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';

// Importando as imagens conforme a sua lista de assets
import MobileImg from './assets/mobile-img.png';
import BackendImg from './assets/backend-img.png';
import FullstackImg from './assets/fullstack-img.png';

export default function App() {
  return (
    <ScrollView style={estilos.container} contentContainerStyle={estilos.content}>
    <Text style={estilos.titulo}>Equipe de Desenvolvimento</Text>

    {/* Card Mobile - Michonne */}
    <View style={estilos.card}>
    <Image source={MobileImg} style={estilos.foto} />
    <View style={estilos.info}>
    <Text style={estilos.nome}>Michonne Hawthorne</Text>
    <Text style={estilos.cargo}>Desenvolvedora Mobile</Text>
    </View>
    </View>

    {/* Card Backend - Samuel L. Jackson */}
    <View style={estilos.card}>
    <Image source={BackendImg} style={estilos.foto} />
    <View style={estilos.info}>
    <Text style={estilos.nome}>Samuel L. Jackson</Text>
    <Text style={estilos.cargo}>Desenvolvedor Backend</Text>
    </View>
    </View>

    {/* Card Full-stack - Chuck Norris */}
    <View style={estilos.card}>
    <Image source={FullstackImg} style={estilos.foto} />
    <View style={estilos.info}>
    <Text style={estilos.nome}>Chuck Norris</Text>
    <Text style={estilos.cargo}>Desenvolvedor Full-stack</Text>
    </View>
    </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Fundo branco da tela
  },
  content: {
    alignItems: 'center',
    paddingVertical: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30, // Margem externa para afastar dos cards
    color: '#800080',
  },
  card: {
    width: '90%',
    flexDirection: 'row', // Alinha imagem e texto lado a lado
    backgroundColor: '#800080', // Fundo roxo do card
    borderRadius: 15,
    padding: 15, // Padding: espaço interno para o conteúdo não tocar a borda
    marginBottom: 20, // Margin: distância entre um card e outro
    alignItems: 'center',
    // Sombras para dar profundidade
    elevation: 5,
    shadowColor: '#000',
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 40, // Metade do tamanho para ficar redondo
    borderWidth: 3, // Moldura branca solicitada
    borderColor: '#fff',
    marginRight: 15, // Espaço entre a foto e o texto
  },
  info: {
    flex: 1,
  },
  nome: {
    color: '#fff', // Fonte branca solicitada
    fontSize: 18,
    fontWeight: 'bold',
  },
  cargo: {
    color: '#ddd',
    fontSize: 14,
    fontStyle: 'italic',
  }
});
