import React from "react";
import { View, Text, Image } from "react-native";
import Capa from "../../assets/capa-filme.png";
import Foto from "../../assets/foto.png";
import estilos from "./estilos";

export default function TelaPerfil() {
  return (
    <View style={estilos.container}>
      <Image style={estilos.fotoTopo} source={Capa} />
      <View style={estilos.boxDescricao}>
        <Image style={estilos.fotoPerfil} source={Foto} />
        <Text style={estilos.titulo}>Doutor Stephen Vincent Strange</Text>
        <Text style={estilos.cargo}>
          Sou o Mago Supremo e protejo a Terra contra ameaças mágicas e
          místicas.
        </Text>
      </View>
    </View>
  );
}
