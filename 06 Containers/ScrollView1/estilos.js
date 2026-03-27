import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imagem: {
    width: "100%",
    height: 250, // Ajustado para visibilidade
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  subtitulo: {
    fontSize: 24,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  paragrafo: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
});
