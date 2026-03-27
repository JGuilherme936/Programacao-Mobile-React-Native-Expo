import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LogoSwitch from '../assets/switch.png';

export default function Topo() {
    return (
        <View style={estilos.container}>
        <Image source={LogoSwitch} style={estilos.img} />
        <Text style={estilos.titulo}>Nintendo Switch</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#e60012', // Vermelho Nintendo
        paddingTop: 40,
        paddingBottom: 20,
        alignItems: 'center',
        width: '100%',
    },
    img: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    titulo: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
});
