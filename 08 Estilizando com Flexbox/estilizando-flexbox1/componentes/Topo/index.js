import React from "react";
import { View, Text, Image } from "react-native";
import churrasco from "../../assets/churrasco.png";
import estilos from "./estilos";

export default function Topo() {
  return (
    <View style={estilos.container}>
      <Image source={churrasco} style={estilos.img} />
      <View>
        <Text style={estilos.titulo}>Churrasco em casa</Text>
        <Text style={estilos.subtitulo}>Calculando a comida e a bebida</Text>
      </View>
    </View>
  );
}
