import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import estilos from "./estilos";
import imgFundo from "../../assets/fundo-tela-inicial.png";

export default function TelaInicial(props) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[estilos.container, { paddingTop: insets.top }]}>
      <Image source={imgFundo} style={estilos.cardImg} resizeMode="contain" />
      <Text style={estilos.titulo}>Conheça um pouco sobre o universo</Text>
      <Text style={estilos.descricao}>
        Toque nos botões abaixo e conheça mais sobre o que existe no céu.
      </Text>

      <View style={estilos.boxBotoes}>
        <Pressable
          style={estilos.botaoContainer}
          onPress={() => props.navigation.navigate("Planetas")}
        >
          <Text style={estilos.botaoLabel}>Planetas</Text>
        </Pressable>
        <Pressable
          style={estilos.botaoContainer}
          onPress={() => props.navigation.navigate("Galáxias")}
        >
          <Text style={estilos.botaoLabel}>Galáxias</Text>
        </Pressable>
        <Pressable
          style={estilos.botaoContainer}
          onPress={() => props.navigation.navigate("Buraco Negro")}
        >
          <Text style={estilos.botaoLabel}>Buraco Negro</Text>
        </Pressable>
      </View>
    </View>
  );
}
