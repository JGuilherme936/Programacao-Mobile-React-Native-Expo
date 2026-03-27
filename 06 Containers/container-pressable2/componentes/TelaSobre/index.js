import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TelaSobre() {
  return (
    <View style={estiloLocal.container}>
      <Text style={estiloLocal.texto}>Sobre</Text>
    </View>
  );
}

const estiloLocal = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  texto: { fontSize: 24, fontWeight: "bold" },
});
