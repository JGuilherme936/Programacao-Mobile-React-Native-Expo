import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
    {/* Título com estilo específico */}
    <Text style={estilos.titulo}>Estilização de Texto</Text>

    {/* Parágrafos com estilos de texto */}
    <Text style={estilos.texto}>
    O componente Text permite aplicar diversos estilos para formatar o texto exibido no aplicativo.
    </Text>

    <Text style={estilos.texto}>
    Podemos alterar a cor, o tamanho e o peso da fonte de forma simples usando o StyleSheet.
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
    padding: 20
  },
  titulo: {
    fontSize: 20,        //
    fontWeight: 'bold',  //
    color: '#000',       //
    marginBottom: 20
  },
  texto: {
    fontSize: 16,        //
    color: '#ff0000',    // Cor vermelha conforme exemplo
    textAlign: 'center',
    marginTop: 10
  }
});
