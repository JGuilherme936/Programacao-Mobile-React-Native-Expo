import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import estilos from "./estilos";

import infoImg from "../../assets/info.png";
import infoBrancoImg from "../../assets/info-branco.png";

export default function TelaHome(props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[estilos.container, { paddingTop: insets.top }]}>
      {/* Botão Simples Estilizado */}
      <Pressable
        style={estilos.botao}
        onPress={() => props.navigation.navigate("Sobre")}
      >
        <Text style={estilos.botaoTitle}>Sobre</Text>
      </Pressable>

      {/* Botão com Ícone Interno */}
      <Pressable style={estilos.botao2} onPress={() => {}}>
        <Image source={infoImg} style={estilos.botao2Icon} />
        <Text style={estilos.botao2Title}>Info Preto</Text>
      </Pressable>

      {/* Botão de Sucesso com Ícone Branco */}
      <Pressable style={estilos.botao3} onPress={() => {}}>
        <Image source={infoBrancoImg} style={estilos.botao3Icon} />
        <Text style={estilos.botaoTitle}>Salvar Alterações</Text>
      </Pressable>

      {/* Botão Largo */}
      <Pressable style={estilos.botao4} onPress={() => {}}>
        <Text style={estilos.botao4Titulo}>COMPRAR AGORA</Text>
      </Pressable>
    </View>
  );
}
