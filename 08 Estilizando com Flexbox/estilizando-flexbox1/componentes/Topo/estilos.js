import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: "#00a99d",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  titulo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  subtitulo: {
    color: "#fff",
    fontSize: 14,
  },
});
