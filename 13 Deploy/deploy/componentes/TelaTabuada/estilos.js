import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  boxPergunta: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 30,
    borderRadius: 15,
    alignItems: "center",
    width: "85%",
  },
  perguntaTexto: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 8,
    width: 120,
    height: 60,
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30,
    backgroundColor: "#fff",
  },
  boxBotoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
