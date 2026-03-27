import React from "react";
import { View, Text, ImageBackground, Image, ScrollView } from "react-native";
import estilos from "./estilos";

import imgFundo from "../../assets/fundo-xcloud.png";
import xcloud1 from "../../assets/xcloud-1.png";
import xcloud2 from "../../assets/xcloud-2.png";

export default function TelaXCloud() {
  return (
    <ImageBackground source={imgFundo} style={estilos.fundo}>
      <ScrollView contentContainerStyle={estilos.container}>
        <Text style={estilos.titulo}>Xbox Cloud Gaming</Text>
        <Text style={estilos.descricao}>
          Jogue mais de 100 jogos de alta qualidade no seu dispositivo favorito
          com o Xbox Game Pass Ultimate.
        </Text>

        <Image source={xcloud1} style={estilos.img} resizeMode="contain" />
        <Text style={estilos.subtitulo}>No Celular</Text>

        <Image source={xcloud2} style={estilos.img} resizeMode="contain" />
        <Text style={estilos.subtitulo}>No Tablet e PC</Text>
      </ScrollView>
    </ImageBackground>
  );
}
