import React from "react";
import { Image, ScrollView, Text, View, StatusBar } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import imgCasal from "./assets/casal.png";
import imgFilhos from "./assets/filhos.png";
import imgVovo from "./assets/vovo.png";
import imgIrmaes from "./assets/irmaes.png";
import estilos from "./estilos";

function ConteudoApp() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={[estilos.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" />

      <Text style={estilos.titulo}>Família Simpsons</Text>

      {/* Card: O Casal */}
      <View style={estilos.card}>
        <Image source={imgCasal} style={estilos.cardImg} resizeMode="contain" />
        <Text style={estilos.cardTitulo}>O Casal</Text>
        <Text style={estilos.cardParagrafo}>
          Homer Jay Simpson é o pai e patriarca da família Simpsons.
        </Text>
        <Text style={estilos.cardParagrafo}>
          Marjorie Jacqueline "Marge" Bouvier Simpson é a esposa de Homer
          Simpson e mãe de Lisa, Bart e Maggie Simpson na série animada Os
          Simpsons.
        </Text>
      </View>

      {/* Card: Os Filhos */}
      <View style={estilos.card}>
        <Image
          source={imgFilhos}
          style={estilos.cardImg}
          resizeMode="contain"
        />
        <Text style={estilos.cardTitulo}>Os Filhos</Text>
        <Text style={estilos.cardParagrafo}>
          Bartholomew JoJo ou apenas Bart é o filho mais velho e mais travesso.
        </Text>
        <Text style={estilos.cardParagrafo}>
          Lisa Marie é a filha do meio e a mais inteligente.
        </Text>
        <Text style={estilos.cardParagrafo}>
          Margaret Evelyn Lenny ou apenas Maggie é o bebê da casa.
        </Text>
      </View>

      {/* Card: O Vovô */}
      <View style={estilos.card}>
        <Image source={imgVovo} style={estilos.cardImg} resizeMode="contain" />
        <Text style={estilos.cardTitulo}>O Vovô</Text>
        <Text style={estilos.cardParagrafo}>
          Abraham Jebediah "Abe" Simpson II, mais conhecido como Vovô é o pai de
          Hommer simpson.
        </Text>
      </View>

      {/* Card: As Cunhadas */}
      <View style={estilos.card}>
        <Image
          source={imgIrmaes}
          style={estilos.cardImg}
          resizeMode="contain"
        />
        <Text style={estilos.cardTitulo}>As Cunhadas</Text>
        <Text style={estilos.cardParagrafo}>
          Patty e Selma são as irmãs de Margie e vivem de forma 'largada'.
        </Text>
      </View>
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
