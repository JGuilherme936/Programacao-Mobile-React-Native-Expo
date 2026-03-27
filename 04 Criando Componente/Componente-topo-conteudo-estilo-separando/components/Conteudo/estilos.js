import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#e60012',
        alignItems: 'center',
        paddingVertical: 30,
        paddingTop: 50,
    },
    img: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase'
    }
});

export default estilos;
