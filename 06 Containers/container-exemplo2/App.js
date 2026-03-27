import React from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  StatusBar,
} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import imgCeu from "./assets/por-do-sol.jpg";
import estilos from "./estilos";

function ConteudoApp() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <ImageBackground
        source={imgCeu}
        style={[estilos.container, { paddingTop: insets.top + 20 }]}
        resizeMode="cover"
      >
        {/* Bloco 1: Luz do Sol */}
        <View style={estilos.box}>
          <Text style={estilos.boxTitulo}>Luz do sol</Text>
          <Text style={estilos.boxParagrafo}>
            O céu envia-nos cerca de 10% da luz do Sol durante o dia. O seu
            brilho deve-se à difusão da luz do Sol pelas moléculas na atmosfera.
          </Text>
        </View>

        {/* Bloco 2: O céu é azul */}
        <View style={estilos.box}>
          <Text style={estilos.boxTitulo}>O céu é azul</Text>
          <Text style={estilos.boxParagrafo}>
            O céu não é amarelado como o Sol porque a difusão funciona como uma
            peneira que só reflete raios azulados.
          </Text>
        </View>

        {/* Bloco 3: Deveria ser violeta */}
        <View style={estilos.box}>
          <Text style={estilos.boxTitulo}>Deveria ser violeta</Text>
          <Text style={estilos.boxParagrafo}>
            O céu, de fato, deveria ser mais violeta, embora, por causa da
            absorção da atmosfera, haja menos violeta na luz do Sol.
          </Text>
        </View>

        {/* Bloco 4: De noite */}
        <View style={estilos.box}>
          <Text style={estilos.boxTitulo}>De noite</Text>
          <Text style={estilos.boxParagrafo}>
            De noite, o céu é negro porque não existe difusão de luz solar. No
            entanto, se o universo é infinito em tamanho, poderíamos esperar ver
            uma estrela em cada direção.
          </Text>
        </View>
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
