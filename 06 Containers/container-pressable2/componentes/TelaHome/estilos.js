import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // Botão 1: Simples e Arredondado
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
  // Botão 2: Ícone ao lado do texto (flexDirection: "row")
  botao2: {
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 20,
    borderColor: "#000",
    borderRadius: 5,
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
  // Botão 3: Fundo verde com ícone branco
  botao3: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4AD395",
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
  },
  // Botão 4: Bloco de texto navegável
  botao4: {
    width: 250,
    backgroundColor: "#03fcf8",
    marginTop: 20,
    padding: 10,
    borderColor: "#334259",
    borderWidth: 1,
  },
  botao4Titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  boxBotao: {
    marginBottom: 10,
  },
});

export default estilos;
