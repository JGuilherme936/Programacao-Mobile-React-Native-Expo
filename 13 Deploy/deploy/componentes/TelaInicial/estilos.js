import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  img: { width: 250, height: 250, borderRadius: 20, marginBottom: 30 },
  titulo: { fontSize: 28, fontWeight: "bold", marginBottom: 10, color: "#333" },
  subtitulo: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    color: "#666",
  },
});
