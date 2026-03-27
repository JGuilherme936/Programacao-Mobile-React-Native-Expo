import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 25,
    alignItems: "center",
    // Sombra para dar aspecto de card
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  cardImg: {
    width: 250,
    height: 150,
    marginBottom: 15,
  },
  cardTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffdb3d", // Amarelo Simpsons
    marginBottom: 10,
    textAlign: "center",
  },
  cardParagrafo: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 5,
  },
});

export default estilos;
