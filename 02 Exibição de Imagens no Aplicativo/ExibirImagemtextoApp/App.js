import React from 'react'; //
import { Image, StyleSheet, Text, View } from 'react-native'; //

export default function App() {
  return (
    // View principal atuando como container agrupador
    <View style={estilos.container}>

    {/* Imagem remota com largura e altura definidas no estilo */}
    <Image
    source={{ uri: 'https://www.devmedia.com.br/arquivos/cursos/rn_exibindo_imagem/aula_3.png' }}
    style={estilos.img}
    />

    {/* Texto descritivo com alinhamento centralizado */}
    <Text style={estilos.paragrafo}>
    Queen é o nome da lendária banda britânica, criada em 1970 por Freddie Mercury e dois ex-músicos do Smile, Brian May e Roger Taylor. A banda começou com o hard rock, mas depois mudou seu estilo para pop-rock, o que tornou seu nome icônico.
    </Text>

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço da tela
    backgroundColor: '#fff',
    alignItems: 'center', // Alinhamento horizontal
    justifyContent: 'center', // Alinhamento vertical
    paddingHorizontal: 20, // Margem lateral para o texto não tocar nas bordas
  },
  img: {
    width: 400, // Largura maior para o brasão da banda
    height: 200, // Altura proporcional
    resizeMode: 'contain', // Garante que a imagem não seja cortada
  },
  paragrafo: {
    marginTop: 20, // Afasta o texto da imagem
    textAlign: 'center', // Centraliza as linhas do texto
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
  },
});
