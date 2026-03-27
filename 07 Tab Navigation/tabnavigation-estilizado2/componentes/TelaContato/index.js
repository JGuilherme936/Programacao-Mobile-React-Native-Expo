import React from "react";
import { View, Text } from "react-native";
import estilos from "./estilos";

export default function TelaContato() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Tela Contato</Text>
      <Text style={estilos.paragrafo}>Os dados de contato aparecem aqui.</Text>
    </View>
  );
}
