import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Card from "./componentes/Card";
import estilos from "./estilos";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={estilos.container}>
        <ScrollView contentContainerStyle={estilos.lista}>
          <Card
            titulo="React Native"
            paragrafo="Framework para criar apps nativos usando React."
            corDeFundo="#61dafb"
          />

          <Card
            titulo="React"
            paragrafo="Biblioteca JavaScript para construir interfaces de usuário."
            corDeFundo="#20232a"
          />

          <Card
            titulo="JavaScript"
            paragrafo="Linguagem de programação de alto nível, interpretada e multicentros."
            corDeFundo="#f7df1e"
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
