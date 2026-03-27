import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import estilos from "./estilos";

export default function Conversor() {
  const insets = useSafeAreaInsets();
  // Definindo o estado para armazenar o valor digitado (Print 15)
  const [nome, setNome] = useState("");

  return (
    <View
      style={[
        estilos.boxConversor,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <Text style={estilos.titulo}>Exemplo TextInput</Text>

      <Text style={estilos.label}>Digite seu nome:</Text>
      <TextInput
        style={estilos.input}
        placeholder="Ex: João"
        onChangeText={(valorDigitado) => setNome(valorDigitado)} // Captura o texto (Print 15)
      />

      <View style={estilos.resultadoBox}>
        <Text style={estilos.resultadoTexto}>Olá, {nome || "usuário"}!</Text>
      </View>
    </View>
  );
}
