import React from "react";
import { View, Text, Image } from "react-native";
import imgCachorro from "../../assets/cachorro.png";
import estilos from "./estilos";

export default function TelaCachorro() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Melhor Amigo</Text>
      <Image source={imgCachorro} style={estilos.img} resizeMode="contain" />
      <Text style={estilos.texto}>
        Cachorros são leais e ótimos companheiros de aventura.
      </Text>
    </View>
  );
}
