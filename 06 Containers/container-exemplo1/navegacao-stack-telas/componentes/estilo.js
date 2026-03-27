import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', // Fundo preto temático
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    titulo: {
        fontSize: 22,
        color: '#ffe81f', // Amarelo Star Wars
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    texto: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: 20
    },
    logo: {
        width: 200,
        height: 100,
        marginBottom: 40
    },
    foto: {
        width: 250,
        height: 150,
        borderRadius: 10,
        marginBottom: 20
    },
    btnArea: {
        width: '100%',
        marginVertical: 10
    }
});

export default estilo;
