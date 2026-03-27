import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40, // Espaço extra no final da rolagem
  },
  box: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: 280,
    marginBottom: 20,
    borderRadius: 8,
  },
  boxTitulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  boxParagrafo: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
});

export default estilos;
