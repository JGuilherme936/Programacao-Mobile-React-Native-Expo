import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold', // Corrigido para ficar apenas no texto
        marginBottom: 20,
    },
    texto: {
        textAlign: "center", //
        marginBottom: 5, // Um pequeno respiro entre as linhas
    }
});

export default estilo;
