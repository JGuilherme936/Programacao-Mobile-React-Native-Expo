import React from "react";
import { View, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import churrasco from "../../assets/churrasco.png";
import estilos from "./estilos";

export default function Topo() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[estilos.box, { paddingTop: insets.top + 20 }]}>
      <Image style={estilos.boxIcone} source={churrasco} />
      <View>
        <Text style={estilos.boxTitulo}>Churrasco em casa</Text>
        <Text style={estilos.boxSubtitulo}>Calculando a comida e a bebida</Text>
      </View>
    </View>
  );
}
