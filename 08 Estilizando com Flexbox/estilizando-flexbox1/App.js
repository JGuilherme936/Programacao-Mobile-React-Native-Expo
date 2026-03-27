import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Topo from "./componentes/Topo";
import Texto from "./componentes/Texto";
import Cards from "./componentes/Cards";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Topo />
        <Texto />
        <Cards />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
