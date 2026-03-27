import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Entypo,
  EvilIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import estilos from "./estilos";

export default function TelaHome() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        estilos.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingVertical: 20 }}
      >
        {/* Exemplo baseado no Print 83 */}
        <Text style={estilos.textoLegenda}>Casa (home)</Text>
        <Entypo name="home" size={40} color="black" />

        <Text style={estilos.textoLegenda}>Usuário (user)</Text>
        <FontAwesome name="user" size={40} color="black" />

        <View style={{ height: 40 }} />

        {/* Seção Entypo (Print 81) */}
        <View style={estilos.card}>
          <Text style={estilos.tituloComponente}>Entypo</Text>
          <View style={estilos.iconRow}>
            <Entypo name="arrow-up" size={30} color="green" />
            <Entypo name="arrow-down" size={30} color="green" />
            <Entypo name="chat" size={30} color="dodgerblue" />
            <Entypo name="cloud" size={30} color="gray" />
          </View>
        </View>

        {/* Seção EvilIcons (Print 81) */}
        <View style={estilos.card}>
          <Text style={estilos.tituloComponente}>EvilIcons</Text>
          <View style={estilos.iconRow}>
            <EvilIcons name="close" size={30} color="red" />
            <EvilIcons name="location" size={30} color="gold" />
            <EvilIcons name="navicon" size={30} color="purple" />
            <EvilIcons name="star" size={30} color="yellow" />
          </View>
        </View>

        {/* Seção MaterialCommunityIcons (Print 81) */}
        <View style={estilos.card}>
          <Text style={estilos.tituloComponente}>MaterialCommunityIcons</Text>
          <View style={estilos.iconRow}>
            <MaterialCommunityIcons
              name="account"
              size={30}
              color="dodgerblue"
            />
            <MaterialCommunityIcons
              name="clock-outline"
              size={30}
              color="red"
            />
            <MaterialCommunityIcons name="alert" size={30} color="gold" />
            <MaterialCommunityIcons name="cart" size={30} color="gray" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
