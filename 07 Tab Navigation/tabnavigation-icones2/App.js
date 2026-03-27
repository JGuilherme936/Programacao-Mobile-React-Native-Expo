import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TelaPrincipal from "./componentes/TelaPrincipal";

export default function App() {
  return (
    <SafeAreaProvider>
      <TelaPrincipal />
    </SafeAreaProvider>
  );
}
