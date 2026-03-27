import React from "react";
import { View, Text, ImageBackground } from "react-native";
import imgFundo from "../../assets/frente-escola.png";
import estilos from "./estilos";

export default function TelaContato() {
  return (
    <ImageBackground source={imgFundo} style={estilos.container}>
      <View style={estilos.boxApresentacao}>
        <Text style={estilos.boxTitulo}>Contato</Text>
        <Text style={estilos.boxSubTitulo}>Entre em contato conosco:</Text>
        <Text style={estilos.boxParagrafo}>
          Endereço: Av. Prof. Carlos Cunha, s/n - São Luís MA
        </Text>
        <Text style={estilos.boxParagrafo}>Cel: 5598988068505</Text>
      </View>
    </ImageBackground>
  );
}
