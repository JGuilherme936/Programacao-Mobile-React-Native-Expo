import React from "react";
import { View, Text } from "react-native";
import estilos from "./estilos";

export default function TelaInicial() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Tela Inicial</Text>
      <Text style={estilos.paragrafo}>
        Esta é a primeira tela do aplicativo
      </Text>
    </View>
  );
}
