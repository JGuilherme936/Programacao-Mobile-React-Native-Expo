import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import Conversor from "./componentes/Conversor";
import estilos from "./estilos";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={estilos.container}>
        <Conversor />
      </View>
    </SafeAreaProvider>
  );
}
