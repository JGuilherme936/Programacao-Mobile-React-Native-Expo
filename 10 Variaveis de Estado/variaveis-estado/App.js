import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Contador from "./componentes/Contador";
import estilos from "./estilos";
import { View } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={estilos.container}>
        <Contador />
      </View>
    </SafeAreaProvider>
  );
}
