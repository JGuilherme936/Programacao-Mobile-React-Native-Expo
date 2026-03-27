import React from "react";
import { View, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import imgGato from "../../assets/gato.png";
import estilos from "./estilos";

export default function TelaGato() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[estilos.container, { paddingBottom: insets.bottom }]}>
      <Image source={imgGato} style={estilos.img} />
    </View>
  );
}
