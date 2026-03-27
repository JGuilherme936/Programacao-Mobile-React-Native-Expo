import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5, // Sombra para Android
    shadowColor: "#000", // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  paragrafo: {
    fontSize: 16,
    color: "#fff",
  },
});

export default estilos;
