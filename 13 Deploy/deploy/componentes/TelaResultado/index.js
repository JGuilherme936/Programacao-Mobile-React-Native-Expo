import React from "react";
import { View, Text, Image, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import imgTrofeu from "../../assets/trofeu.jpg";
import imgErrou from "../../assets/errou.jpg";
import estilos from "./estilos";

export default function TelaResultado({ route, navigation }) {
  const insets = useSafeAreaInsets();
  // Extrai o parâmetro enviado pela TelaTabuada
  const { acertou } = route.params;

  return (
    <View style={[estilos.container, { paddingTop: insets.top }]}>
      <Image source={acertou ? imgTrofeu : imgErrou} style={estilos.img} />

      <Text
        style={[
          estilos.textoResultado,
          { color: acertou ? "#009933" : "#cc0000" },
        ]}
      >
        {acertou ? "Você Acertou! Parabéns!" : "Você Errou! Que pena!"}
      </Text>

      <Button
        title="Voltar para o Jogo"
        onPress={() => navigation.goBack()}
        color="#0066cc"
      />
    </View>
  );
}
