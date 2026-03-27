import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import estilos from "./estilos";

export default function Contador() {
  const insets = useSafeAreaInsets();
  // Definindo a variável de estado (Print 38)
  const [numero, setNumero] = useState(0);

  const incrementar = () => setNumero(numero + 1);
  const decrementar = () => setNumero(numero - 1);

  return (
    <View
      style={[
        estilos.boxContador,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <Text style={estilos.titulo}>Contador</Text>

      <View style={estilos.display}>
        <Text style={estilos.numero}>{numero}</Text>
      </View>

      <View style={estilos.areaBotoes}>
        <View style={estilos.botao}>
          <Button title="Incrementar" onPress={incrementar} color="#00a99d" />
        </View>
        <View style={estilos.botao}>
          <Button title="Decrementar" onPress={decrementar} color="#ff5c5c" />
        </View>
      </View>
    </View>
  );
}
