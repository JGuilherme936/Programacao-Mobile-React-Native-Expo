import React from "react";
import { View, Text } from "react-native";
import estilos from "./estilos";

export default function TelaSobre() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Esta é a tela Sobre</Text>
    </View>
  );
}
