import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import imgVinhoBranco from "../../assets/vinho-branco.jpg";
import imgVinhoRose from "../../assets/vinho-rose.jpg";
import imgVinhoTinto from "../../assets/vinho-tinto.jpg";
import imgVinhoEspecial from "../../assets/vinho-especial.jpg";
import estilos from "./estilos";

export default function TelaCatalogo() {
  return (
    <View style={estilos.container}>
      <ScrollView style={estilos.containerScroll}>
        <Text style={estilos.titulo}>Nossos vinhos</Text>
        <Text style={estilos.subtitulo}>
          Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco,
          vinho rosé, vinho tinto e vinho seco.
        </Text>

        {/* Card 1 */}
        <View style={estilos.cardVinho}>
          <Image
            resizeMode="contain"
            style={estilos.vinhoImg}
            source={imgVinhoBranco}
          />
          <View style={estilos.cardBoxDescricao}>
            <Text style={estilos.cardTitulo}>Chatigny Chardonnay</Text>
            <Text style={estilos.cardDescricao}>
              Vinho leve, refrescante e levemente cítrico da cor amarelo palha.
              Perfeito com carnes brancas e massa ao pesto.
            </Text>
          </View>
        </View>

        {/* Card 2 */}
        <View style={estilos.cardVinho}>
          <Image
            resizeMode="contain"
            style={estilos.vinhoImg}
            source={imgVinhoRose}
          />
          <View style={estilos.cardBoxDescricao}>
            <Text style={estilos.cardTitulo}>Concha y Toro Exportacion</Text>
            <Text style={estilos.cardDescricao}>
              Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito
              com saladas e aperitivos.
            </Text>
          </View>
        </View>

        {/* Repetir para Tinto e Especial conforme Prints 381 */}
      </ScrollView>
    </View>
  );
}
