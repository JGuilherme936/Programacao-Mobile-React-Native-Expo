import { useState } from "react";
import { Button, Text, View } from "react-native";
import retornaHora from "../../servicos/hora";
import estilos from "./estilos";

export function Hora() {
  const [hora, setHora] = useState(retornaHora());

  function handleBotaoHora() {
    const horaAtual = retornaHora();
    setHora(horaAtual);
  }

  function handleBotaoLimpar() {
    setHora("");
  }

  return (
    <View style={estilos.container}>
      <View style={estilos.box}>
        <Text style={estilos.textoHora}>{hora}</Text>
        <View style={estilos.buttonContainer}>
          <Button title="MOSTRAR HORA" onPress={handleBotaoHora} color="#2196F3" />
          <Button title="LIMPAR HORA" onPress={handleBotaoLimpar} color="red" />
        </View>
      </View>
    </View>
  );
}
