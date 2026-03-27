import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  fotoTopo: { flex: 1 },
  boxDescricao: { flex: 1, alignItems: "center", paddingHorizontal: 10 },
  fotoPerfil: {
    marginTop: 20,
    marginBottom: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  titulo: { marginBottom: 10, fontSize: 22 },
  cargo: { textAlign: "center", marginHorizontal: 15, fontSize: 16 },
});

export default estilos;
