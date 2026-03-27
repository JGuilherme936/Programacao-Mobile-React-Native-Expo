import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  tabuleiro: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#333',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#555',
  },
  celula: {
    width: '33.33%', // Agora ocupa exatamente um terço, sem erro de pixel
    height: '33.33%',
    borderWidth: 1,
    borderColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoCelula: {
    fontSize: 45,
    fontWeight: 'bold',
  },
  status: {
    marginTop: 30,
    fontSize: 22,
    color: '#fff',
    fontWeight: '500',
    height: 40,
  },
  botaoReiniciar: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 3,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  }
});

export default estilos;
