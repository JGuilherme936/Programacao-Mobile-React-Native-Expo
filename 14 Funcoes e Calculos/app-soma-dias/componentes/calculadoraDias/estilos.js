import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333'
  },
  areaCalculo: {
    width: '100%',
    marginBottom: 30
  },
  campoDias: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 18
  },
  areaResultado: {
    alignItems: 'center',
    padding: 15,
    width: '100%'
  },
  textoDias: {
    fontSize: 16,
    marginBottom: 10
  },
  textoResultado: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    minWidth: 150,
    textAlign: 'center'
  }
});

export default estilos;
