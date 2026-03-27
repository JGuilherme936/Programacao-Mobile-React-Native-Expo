import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  boxContador: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  display: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#00a99d",
    marginBottom: 30,
  },
  numero: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#333",
  },
  areaBotoes: {
    width: "80%",
  },
  botao: {
    marginBottom: 10,
  },
});

export default estilos;
