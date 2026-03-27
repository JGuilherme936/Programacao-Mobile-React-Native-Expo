import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, ImageBackground } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import imgFundo from "../../assets/fundo.png";
import estilos from "./estilos";

export default function TelaTabuada({ navigation }) {
  const insets = useSafeAreaInsets();
  const [numero1, setNumero1] = useState(1);
  const [numero2, setNumero2] = useState(1);
  const [resposta, setResposta] = useState("");

  const gerarPergunta = () => {
    setNumero1(Math.floor(Math.random() * 10) + 1);
    setNumero2(Math.floor(Math.random() * 10) + 1);
    setResposta("");
  };

  // Gera a primeira pergunta ao carregar a tela
  useEffect(() => {
    gerarPergunta();
  }, []);

  const validarResposta = () => {
    const correto = numero1 * numero2 === parseInt(resposta);
    // Navega para a tela de resultado passando um parâmetro (prop)
    navigation.navigate("Resultado", { acertou: correto });
    gerarPergunta(); // Prepara a próxima pergunta para quando o usuário voltar
  };

  return (
    <ImageBackground
      source={imgFundo}
      style={[estilos.container, { paddingTop: insets.top }]}
    >
      <View style={estilos.boxPergunta}>
        <Text style={estilos.perguntaTexto}>
          {numero1} x {numero2} = ?
        </Text>

        <TextInput
          style={estilos.input}
          keyboardType="numeric"
          value={resposta}
          onChangeText={setResposta}
          placeholder="0"
        />

        <View style={estilos.boxBotoes}>
          <Button title="Pular" onPress={gerarPergunta} color="#ff9900" />
          <Button title="Responder" onPress={validarResposta} color="#009933" />
        </View>
      </View>
    </ImageBackground>
  );
}
