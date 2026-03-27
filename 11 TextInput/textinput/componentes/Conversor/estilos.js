import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  boxConversor: {
    width: "90%",
    alignItems: "center",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#00a99d",
  },
  label: {
    fontSize: 18,
    alignSelf: "flex-start",
    marginBottom: 10,
    marginLeft: "5%",
  },
  input: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderColor: "#bcbcbc",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 30,
  },
  resultadoBox: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
  },
  resultadoTexto: {
    fontSize: 22,
    fontWeight: "500",
    color: "#333",
  },
});

export default estilos;
