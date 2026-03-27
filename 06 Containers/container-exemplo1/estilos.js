import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#fff",
    width: 300,
    padding: 15, // Ajustado para melhor respiro interno
    borderRadius: 5, // Leve arredondamento para estética
  },
  boxTitulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
  },
  boxParagrafo: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default estilos;
