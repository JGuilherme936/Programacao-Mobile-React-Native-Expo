import React from "react";
import { View, Text, ImageBackground, Image, ScrollView } from "react-native";
import estilos from "./estilos";

import imgFundo from "../../assets/fundo-xcloud.png";
import jogo1 from "../../assets/jogo-1.png"; // Halo Infinite
import jogo2 from "../../assets/jogo-2.png"; // Forza Horizon 5
import jogo3 from "../../assets/jogo-3.png"; // Psychonauts 2
import jogo4 from "../../assets/jogo-4.png"; // Sea of Thieves

export default function TelaJogos() {
  return (
    <ImageBackground source={imgFundo} style={estilos.fundo}>
      <ScrollView contentContainerStyle={estilos.container}>
        <Text style={estilos.titulo}>Jogos do Game Pass</Text>
        <Text style={estilos.descricao}>
          Confira alguns dos principais títulos disponíveis no catálogo do Xbox
          Game Pass.
        </Text>

        <Image source={jogo1} style={estilos.img} resizeMode="contain" />
        <Text style={estilos.subtitulo}>Halo Infinite</Text>

        <Image source={jogo2} style={estilos.img} resizeMode="contain" />
        <Text style={estilos.subtitulo}>Forza Horizon 5</Text>

        <Image source={jogo3} style={estilos.img} resizeMode="contain" />
        <Text style={estilos.subtitulo}>Psychonauts 2</Text>

        <Image source={jogo4} style={estilos.img} resizeMode="contain" />
        <Text style={estilos.subtitulo}>Sea of Thieves</Text>
      </ScrollView>
    </ImageBackground>
  );
}
