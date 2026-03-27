import React from "react";
import { View, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import imgCachorro from "../../assets/cachorro.png";
import estilos from "./estilos";

export default function TelaCachorro() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[estilos.container, { paddingBottom: insets.bottom }]}>
      <Image source={imgCachorro} style={estilos.img} />
    </View>
  );
}
