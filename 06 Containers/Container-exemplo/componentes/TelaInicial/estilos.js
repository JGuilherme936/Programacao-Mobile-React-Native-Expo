import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  logoPrincipal: { width: 80, height: 80, marginBottom: 10 },
  titulo: { color: "#fff", fontSize: 24, fontWeight: "bold", marginBottom: 30 },
  card: {
    backgroundColor: "#107c10",
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardImg: { width: 40, height: 40, marginRight: 20 },
  cardTexto: { color: "#fff", fontSize: 20, fontWeight: "bold" },
});
