import React from "react";
import { ImageBackground, View, Text, StatusBar } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import imgFundo from "./assets/fundo.png";
import estilos from "./estilos";

function ConteudoApp() {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={imgFundo}
      style={[
        estilos.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
      resizeMode="cover"
    >
      {/* Deixa a barra de status transparente para a imagem subir até o topo */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <View style={estilos.box}>
        <Text style={estilos.boxTitulo}>Planeta Terra</Text>

        <Text style={estilos.boxParagrafo}>
          Nosso planeta é um dos oito que estão no Sistema Solar orbitando em
          torno de uma estrela central: o Sol.
        </Text>

        <Text style={estilos.boxParagrafo}>
          Essa órbita permite o desenvolvimento da vida devido à temperatura que
          chega até nós, o que chamamos de radiação solar.
        </Text>
      </View>
    </ImageBackground>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ConteudoApp />
    </SafeAreaProvider>
  );
}
