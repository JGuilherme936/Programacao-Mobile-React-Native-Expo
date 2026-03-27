import React from "react";
import {
  ImageBackground,
  View,
  Text,
  StatusBar,
  ScrollView,
} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import imgRaposa from "./assets/raposa.png";
import imgAterrissagem from "./assets/aterrissagem.png";
import imgToxico from "./assets/design-toxico.png";
import estilos from "./estilos";

function ConteudoApp() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={[
        estilos.container,
        { paddingTop: insets.top + 20, paddingBottom: 40 },
      ]}
    >
      <StatusBar barStyle="dark-content" />

      <Text style={estilos.titulo}>Top Fotografias</Text>
      <Text style={estilos.subtitulo}>
        Candidatas a prêmio de fotografia da vida selvagem em 2021
      </Text>

      {/* Card 1: Raposa */}
      <ImageBackground
        style={estilos.card}
        source={imgRaposa}
        resizeMode="cover"
      >
        <Text style={estilos.cardTitulo}>Raposa da tempestade</Text>
        <Text style={estilos.cardParagrafo}>Jonny Armstrong</Text>
      </ImageBackground>

      {/* Card 2: Aterrissagem */}
      <ImageBackground
        style={estilos.card}
        source={imgAterrissagem}
        resizeMode="cover"
      >
        <Text style={estilos.cardTitulo}>Aterrissagem de Apolo</Text>
        <Text style={estilos.cardParagrafo}>Ermelin Dupiex</Text>
      </ImageBackground>

      {/* Card 3: Design Tóxico */}
      <ImageBackground
        style={estilos.card}
        source={imgToxico}
        resizeMode="cover"
      >
        <Text style={estilos.cardTitulo}>Design tóxico</Text>
        <Text style={estilos.cardParagrafo}>Gheorghe Popa</Text>
      </ImageBackground>
    </ScrollView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ConteudoApp />
    </SafeAreaProvider>
  );
}
