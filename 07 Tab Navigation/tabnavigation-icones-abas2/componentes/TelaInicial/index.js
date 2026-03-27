import React from "react";
import { View, Text, ImageBackground } from "react-native";
import imgFundo from "../../assets/frente-escola.png";
import estilos from "./estilos";

export default function TelaInicial() {
  return (
    <ImageBackground source={imgFundo} style={estilos.container}>
      <View style={estilos.boxApresentacao}>
        <Text style={estilos.boxTitulo}>Vila Capininga Ecopousada</Text>
        <Text style={estilos.boxParagrafo}>Santo Amaro - MA</Text>
      </View>
    </ImageBackground>
  );
}
