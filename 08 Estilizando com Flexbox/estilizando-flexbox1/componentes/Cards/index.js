import React from "react";
import { View, Text, Image } from "react-native";
import convidado from "../../assets/convidado.png";
import carne from "../../assets/carne.png";
import refrigerante from "../../assets/refrigerante.png";
import cerveja from "../../assets/cerveja.png";
import estilos from "./estilos";

export default function Cards() {
  return (
    <View style={estilos.container}>
      <View style={estilos.card}>
        <Image source={convidado} style={estilos.img} />
        <Text style={estilos.label}>Convidados</Text>
        <Text style={estilos.valor}>1</Text>
      </View>

      <View style={estilos.card}>
        <Image source={carne} style={estilos.img} />
        <Text style={estilos.label}>Carne</Text>
        <Text style={estilos.valor}>400 GR</Text>
      </View>

      <View style={estilos.card}>
        <Image source={refrigerante} style={estilos.img} />
        <Text style={estilos.label}>Refrigerante</Text>
        <Text style={estilos.valor}>700 ML</Text>
      </View>

      <View style={estilos.card}>
        <Image source={cerveja} style={estilos.img} />
        <Text style={estilos.label}>Cerveja</Text>
        <Text style={estilos.valor}>4 Latas</Text>
      </View>
    </View>
  );
}
