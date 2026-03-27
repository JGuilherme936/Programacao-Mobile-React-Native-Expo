import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1, // Permite que a View ocupe a tela toda
    backgroundColor: "#fff",
  },
  imagem: {
    width: 300,
    height: 300,
    marginBottom: 20,
    alignSelf: "center", // Centraliza a imagem fixa
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: "center",
  },
  paragrafo: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
  },
});

export default estilos;
