import React from "react";
import { View, Text, Image } from "react-native";
import convidado from "../../assets/convidado.png";
import carne from "../../assets/carne.png";
import refrigerante from "../../assets/refrigerante.png";
import cerveja from "../../assets/cerveja.png";
import estilos from "./estilos";

export default function Cards() {
  return (
    <View style={estilos.boxDados}>
      <View style={estilos.boxCard}>
        <Image style={estilos.boxCardIcone} source={convidado} />
        <Text style={estilos.boxCardTexto}>Convidados</Text>
        <Text style={estilos.boxCardValor}>1</Text>
      </View>

      <View style={estilos.boxCard}>
        <Image style={estilos.boxCardIcone} source={carne} />
        <Text style={estilos.boxCardTexto}>Carne</Text>
        <Text style={estilos.boxCardValor}>400 GR</Text>
      </View>

      <View style={estilos.boxCard}>
        <Image style={estilos.boxCardIcone} source={refrigerante} />
        <Text style={estilos.boxCardTexto}>Refrigerante</Text>
        <Text style={estilos.boxCardValor}>700 ML</Text>
      </View>

      <View style={estilos.boxCard}>
        <Image style={estilos.boxCardIcone} source={cerveja} />
        <Text style={estilos.boxCardTexto}>Cerveja</Text>
        <Text style={estilos.boxCardValor}>4 Latas</Text>
      </View>
    </View>
  );
}
