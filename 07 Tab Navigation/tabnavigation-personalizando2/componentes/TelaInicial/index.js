import React from "react";
import { View, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import imgCapa from "../../assets/capa.png";
import estilos from "./estilos";

export default function TelaInicial() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[estilos.container, { paddingTop: insets.top }]}>
      <Text style={estilos.titulo}>Pets e Companhia</Text>
      <Image source={imgCapa} style={estilos.img} resizeMode="contain" />
      <Text style={estilos.texto}>
        Seja bem-vindo ao nosso catálogo de pets! Explore as abas abaixo para
        conhecer nossos amigos.
      </Text>
    </View>
  );
}
