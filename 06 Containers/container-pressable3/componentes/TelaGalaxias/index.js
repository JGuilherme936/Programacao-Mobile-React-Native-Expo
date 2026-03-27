import React from "react";
import { View, Text, Pressable, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import estilos from "./estilos";

import imgHome from "../../assets/icon-home.png";
import imgBuracoNegro from "../../assets/icon-buraco-negro.png";
import imgGalaxias from "../../assets/galaxias2.png";

export default function TelaGalaxias(props) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={{ backgroundColor: "#121212" }}>
      <View style={[estilos.container, { paddingTop: insets.top + 20 }]}>
        <Text style={estilos.titulo}>Galáxias</Text>

        <Text style={estilos.descricao}>
          As galáxias são grandes sistemas que reúnem estrelas, planetas, poeira
          cósmica, gás e matéria escura, tudo mantido unido pela gravidade. A
          Via Láctea, onde o Sistema Solar está localizado, é apenas uma entre
          bilhões de galáxias no universo observável.
        </Text>

        <Image
          source={imgGalaxias}
          style={estilos.cardImg}
          resizeMode="cover"
        />

        <Pressable
          style={estilos.btn}
          onPress={() => props.navigation.navigate("Buraco Negro")}
        >
          <Image source={imgBuracoNegro} style={estilos.btnIcon} />
          <Text style={estilos.btnLabel}>Buraco Negro</Text>
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
