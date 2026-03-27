import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  botao: {
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 20,
  },
  botaoTitle: {
    color: "#fff",
  },
  botao2: {
    width: 150,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 20,
    borderColor: "#000",
    borderWidth: 1,
  },
  botao2Icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  botao2Title: {
    color: "#000",
  },
  botao3: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4AD395",
    borderRadius: 5,
    marginTop: 20,
    padding: 12,
    flexDirection: "row",
  },
  botao3Icon: {
    width: 25,
    height: 25,
    marginRight: 8,
  },
  botao4: {
    width: 250,
    backgroundColor: "#03fcf8",
    marginTop: 20,
    padding: 10,
    borderColor: "#334259",
    borderWidth: 1,
    alignItems: "center",
  },
  botao4Titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default estilos;
