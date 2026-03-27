import React from "react";
import { View, Image } from "react-native";
import imgGato from "../../assets/gato.png";
import estilos from "./estilos";

export default function TelaGato() {
  return (
    <View style={estilos.container}>
      <Image source={imgGato} style={estilos.img} />
    </View>
  );
}
