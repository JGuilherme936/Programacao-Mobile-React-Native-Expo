import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b3948', // Cor de fundo baseada nos slides
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    elevation: 5,
  },
  textoHora: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: 20,
    minWidth: 150,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    gap: 10,
  }
});

export default estilos;
