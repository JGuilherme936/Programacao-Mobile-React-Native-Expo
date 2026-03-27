import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; // Importando StyleSheet

export default function App() {
  return (
    // Associando o estilo ao componente através da propriedade 'style'
    <View style={estilos.container}>

    <Text style={estilos.titulo}>Uso do StyleSheet</Text>

    <Text style={estilos.texto}>
    Com o StyleSheet, separamos a organização visual da estrutura do código.
    </Text>

    <Text style={estilos.texto}>
    Isso facilita a manutenção e melhora a legibilidade do projeto.
    </Text>

    </View>
  );
}

// Criando o objeto de estilos
// Cada chave representa um estilo que pode ser reutilizado
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15
  },
  texto: {
    fontSize: 16,
    color: '#34495e',
    textAlign: 'center',
    marginTop: 10
  }
});
