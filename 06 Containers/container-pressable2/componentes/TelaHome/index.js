import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import estilos from "./estilos";

import icon from "../../assets/info.png";
import iconBR from "../../assets/info-branco.png";

export default function TelaHome(props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[estilos.container, { paddingTop: insets.top }]}>
      {/* Botão 1: Texto Simples */}
      <Pressable
        style={estilos.botao}
        onPress={() => {
          props.navigation.navigate("Sobre");
        }}
      >
        <Text style={estilos.botaoTitle}>Sobre</Text>
      </Pressable>

      {/* Botão 2: Ícone + Texto */}
      <Pressable
        style={estilos.botao2}
        onPress={() => {
          props.navigation.navigate("Sobre");
        }}
      >
        <Image style={estilos.botao2Icon} source={icon} />
        <Text style={estilos.botao2Title}>Sobre</Text>
      </Pressable>

      {/* Botão 3: Ícone Branco */}
      <Pressable
        style={estilos.botao3}
        onPress={() => {
          props.navigation.navigate("Sobre");
        }}
      >
        <Image style={estilos.botao2Icon} source={iconBR} />
      </Pressable>

      {/* Botão 4: Texto como contêiner */}
      <Pressable
        style={estilos.botao4}
        onPress={() => {
          props.navigation.navigate("Sobre");
        }}
      >
        <Text style={estilos.botao4Titulo}>Navegar para tela sobre</Text>
        <Text>Clique nesta caixa de texto para navegar para a tela Sobre</Text>
      </Pressable>
    </View>
  );
}
