import React from "react";
import { ScrollView, View, Text, Pressable, Image } from "react-native";
import estilos from "./estilos";
import imgHome from "../../assets/icon-home.png";
import imgGalaxy from "../../assets/icon-galaxy.png";
import imgPlanetas1 from "../../assets/planetas1.png";
import imgPlanetas3 from "../../assets/planeta-terra.png";

export default function TelaPlanetas(props) {
  return (
    <ScrollView style={{ backgroundColor: "#121212" }}>
      <View style={estilos.container}>
        <Text style={estilos.titulo}>Planetas</Text>
        <Text style={estilos.descricao}>
          Os planetas do Sistema Solar são corpos celestes que orbitam o Sol...
        </Text>
        <Image source={imgPlanetas1} style={estilos.cardImg} />
        <Text style={estilos.descricao}>
          A Terra é o terceiro planeta a contar do Sol...
        </Text>
        <Image source={imgPlanetas3} style={estilos.cardImg} />

        <Pressable
          style={estilos.btn}
          onPress={() => props.navigation.navigate("Galáxias")}
        >
          <Image source={imgGalaxy} style={estilos.btnIcon} />
          <Text style={estilos.btnLabel}>Galáxias</Text>
        </Pressable>
        <Pressable
          style={estilos.btn}
          onPress={() => props.navigation.navigate("Tela inicial")}
        >
          <Image source={imgHome} style={estilos.btnIcon} />
          <Text style={estilos.btnLabel}>Início</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
