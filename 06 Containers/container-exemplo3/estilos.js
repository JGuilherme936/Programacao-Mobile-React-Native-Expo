import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 16,
    textAlign: "center",
  },
  card: {
    width: 300,
    height: 150,
    marginTop: 30,
    // Garante que o conteúdo interno não "vaze" se houver arredondamento
    overflow: "hidden",
    borderRadius: 8,
  },
  cardTitulo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10,
    // Sombra no texto para melhorar a leitura sobre a imagem
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  cardParagrafo: {
    color: "#fff",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default estilos;
