import React from "react";
import { View, Text, Image, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import imgTabuada from "../../assets/tabuada.jpeg";
import estilos from "./estilos";

export default function TelaInicial({ navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[estilos.container, { paddingTop: insets.top }]}>
      <Image source={imgTabuada} style={estilos.img} />
      <Text style={estilos.titulo}>Jogo da Tabuada</Text>
      <Text style={estilos.subtitulo}>
        Teste seus conhecimentos em matemática resolvendo as multiplicações!
      </Text>
      <Button
        title="Iniciar Jogo"
        onPress={() => navigation.navigate("Tabuada")}
        color="#0066cc"
      />
    </View>
  );
}
