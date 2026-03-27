import React from "react";
import { View, Text, Pressable, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import estilos from "./estilos";

import imgHome from "../../assets/icon-home.png";
import imgGalaxy from "../../assets/icon-galaxy.png";
import imgBuracoNegro from "../../assets/galaxias1.png";

export default function TelaBuracoNegro(props) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={{ backgroundColor: "#121212" }}>
      <View style={[estilos.container, { paddingTop: insets.top + 20 }]}>
        <Text style={estilos.titulo}>Buraco Negro</Text>

        <Text style={estilos.descricao}>
          Buraco negro é uma região do espaço-tempo em que o campo gravitacional
          é tão intenso que nada pode escapar dela. A teoria da relatividade
          geral prevê que uma massa suficientemente compacta pode deformar o
          espaço-tempo para formar um buraco negro.
        </Text>

        <Image
          source={imgBuracoNegro}
          style={estilos.cardImg}
          resizeMode="cover"
        />

        <Pressable
          style={estilos.btn}
          onPress={() => props.navigation.navigate("Galáxias")}
        >
          <Image source={imgGalaxy} style={estilos.btnIcon} />
          <Text style={estilos.btnLabel}>Galáxias</Text>
        </Pressable>

        <Pressable
          style={estilos.btn}
          onPress={() => props.navigation.navigate("Tela inicial")}
        >
          <Image source={imgHome} style={estilos.btnIcon} />
          <Text style={estilos.btnLabel}>Início</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
