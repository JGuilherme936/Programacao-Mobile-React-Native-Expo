import React from "react";
import { View, Text, ImageBackground, Image, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import estilos from "./estilos";

import imgFundo from "../../assets/fundo-xcloud.png";
import logo from "../../assets/logo.png";
import logoConsole from "../../assets/logo2.png";
import logoJogos from "../../assets/logo3.png";

export default function TelaInicial(props) {
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground
      source={imgFundo}
      style={[estilos.container, { paddingTop: insets.top }]}
    >
      <Image source={logo} style={estilos.logoPrincipal} />
      <Text style={estilos.titulo}>Xbox Cloud Gaming</Text>

      {/* Card Console */}
      <Pressable
        style={estilos.card}
        onPress={() => props.navigation.navigate("Console")}
      >
        <Image source={logoConsole} style={estilos.cardImg} />
        <Text style={estilos.cardTexto}>Console</Text>
      </Pressable>

      {/* Card XCloud */}
      <Pressable
        style={estilos.card}
        onPress={() => props.navigation.navigate("XCloud")}
      >
        <Image source={logo} style={estilos.cardImg} />
        <Text style={estilos.cardTexto}>XCloud</Text>
      </Pressable>

      {/* Card Jogos */}
      <Pressable
        style={estilos.card}
        onPress={() => props.navigation.navigate("Jogos")}
      >
        <Image source={logoJogos} style={estilos.cardImg} />
        <Text style={estilos.cardTexto}>Jogos</Text>
      </Pressable>
    </ImageBackground>
  );
}
