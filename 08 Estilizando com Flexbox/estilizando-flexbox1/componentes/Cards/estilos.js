import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    padding: 10,
  },
  card: {
    width: 150,
    height: 120,
    backgroundColor: "#e6f7f6",
    borderWidth: 1,
    borderColor: "#00a99d",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  img: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    color: "#00a99d",
  },
  valor: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00a99d",
  },
});
