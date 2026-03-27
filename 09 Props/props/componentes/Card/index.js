import React from "react";
import { View, Text } from "react-native";
import estilos from "./estilos";

export default function Card(props) {
  return (
    <View style={[estilos.card, { backgroundColor: props.corDeFundo }]}>
      <Text style={estilos.titulo}>{props.titulo}</Text>
      <Text style={estilos.paragrafo}>{props.paragrafo}</Text>
    </View>
  );
}
