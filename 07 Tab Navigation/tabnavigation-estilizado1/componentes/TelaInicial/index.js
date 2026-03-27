import React from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import estilos from "./estilos";

export default function TelaInicial() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[estilos.container, { paddingBottom: insets.bottom }]}>
      <Text style={estilos.titulo}>Tela Inicial</Text>
      <Text style={estilos.paragrafo}>
        Esta é a primeira tela do aplicativo
      </Text>
    </View>
  );
}
