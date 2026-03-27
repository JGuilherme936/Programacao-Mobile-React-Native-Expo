import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
// Importando os componentes de Área Segura
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Bio from "./components/Bio";
import CardFilme from "./components/CardFilme";

// Importando os banners
import Banner1408 from "./assets/1408.png";
import BannerBlack from "./assets/black-cream.png";

export default function App() {
  return (
    <SafeAreaProvider>
      {/* O SafeAreaView garante que o conteúdo comece abaixo da câmera */}
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />

        <Bio />

        <View style={styles.filmesArea}>
          <CardFilme
            imagem={BannerBlack}
            nomeFilme="Black Cream"
            descricao="Samuel interpreta um mentor enigmático neste thriller urbano."
          />

          <CardFilme
            imagem={Banner1408}
            nomeFilme="1408"
            descricao="Baseado no conto de Stephen King, Samuel vive o gerente do hotel."
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a", // Mantemos a cor do topo para o preenchimento da safe area
  },
  filmesArea: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Fundo claro para a área de cards
    paddingBottom: 30,
  },
});
