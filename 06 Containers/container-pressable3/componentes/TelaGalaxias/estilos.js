import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
    padding: 20,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 25,
    backgroundColor: "#cf9556",
    paddingVertical: 5,
    width: 200,
    marginBottom: 10,
  },
  btnIcon: {
    width: 25,
    height: 25,
  },
  btnLabel: {
    color: "#121212",
    fontWeight: "bold",
    marginLeft: 10,
    paddingVertical: 5,
  },
  cardImg: {
    width: 320,
    height: 200,
    borderRadius: 10,
    marginBottom: 40,
  },
  titulo: {
    fontSize: 26,
    color: "#cf9556",
    marginBottom: 15,
    fontWeight: "bold",
  },
  descricao: {
    color: "#b2b2b2",
    width: 320,
    marginBottom: 25,
    textAlign: "center",
    lineHeight: 20,
  },
});

export default estilos;
