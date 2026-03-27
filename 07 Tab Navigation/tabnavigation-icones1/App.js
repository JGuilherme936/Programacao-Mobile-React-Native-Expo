import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TelaHome from "./componentes/TelaHome";

export default function App() {
  return (
    <SafeAreaProvider>
      <TelaHome />
    </SafeAreaProvider>
  );
}
