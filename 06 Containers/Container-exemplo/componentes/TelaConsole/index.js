import React from "react";
import { View, Text, ImageBackground, Image, ScrollView } from "react-native";
import estilos from "./estilos";

import imgFundo from "../../assets/fundo-xcloud.png";
import console1 from "../../assets/console-1.png";
import console2 from "../../assets/console-2.png";

export default function TelaConsole() {
  return (
    <ImageBackground source={imgFundo} style={estilos.fundo}>
      <ScrollView contentContainerStyle={estilos.container}>
        <Text style={estilos.titulo}>Consoles Xbox</Text>
        <Text style={estilos.descricao}>
          O Xbox Series X é o console mais rápido e poderoso de todos os tempos.
        </Text>

        <Image source={console1} style={estilos.img} resizeMode="contain" />
        <Text style={estilos.subtitulo}>Xbox Series X</Text>

        <Image source={console2} style={estilos.img} resizeMode="contain" />
        <Text style={estilos.subtitulo}>Xbox Series S</Text>
      </ScrollView>
    </ImageBackground>
  );
}
