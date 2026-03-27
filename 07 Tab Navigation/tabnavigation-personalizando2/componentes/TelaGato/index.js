import React from "react";
import { View, Text, Image } from "react-native";
import imgGato from "../../assets/gato.png";
import estilos from "./estilos";

export default function TelaGato() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Mundo Felino</Text>
      <Image source={imgGato} style={estilos.img} resizeMode="contain" />
      <Text style={estilos.texto}>
        Os gatos são animais independentes e carinhosos.
      </Text>
    </View>
  );
}
