import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 15,
        marginHorizontal: 20,
        overflow: 'hidden',
        elevation: 4,
    },
    banner: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
    },
    info: {
        padding: 15,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    participacao: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
        fontStyle: 'italic',
    }
});
