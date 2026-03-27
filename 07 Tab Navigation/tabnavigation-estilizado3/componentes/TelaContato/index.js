import React from "react";
import { View, Text, Image } from "react-native";
import Local from "../../assets/local.png";
import estilos from "./estilos";

export default function TelaContato() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Sanctum Sanctorum</Text>
      <Image style={estilos.fotoTopo} source={Local} />
      <Text style={estilos.paragrafo}>
        Para qualquer tipo de feitiço basta me encontrar na Rua Bleecker, nº
        177A, em Greenwich Village, Nova York.
      </Text>
    </View>
  );
}
