import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#1a1a1a',
        width: '100%',
    },
    foto: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#ff0000',
        marginBottom: 15,
    },
    nome: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    bio: {
        fontSize: 14,
        color: '#ccc',
        textAlign: 'center',
        marginTop: 10,
        lineHeight: 20,
    }
});
