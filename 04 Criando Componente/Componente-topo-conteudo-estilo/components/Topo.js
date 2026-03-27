import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from '../assets/switch.png';

export default function Topo() {
    return (
        <View style={styles.container}>
        <Image source={Logo} style={styles.img} />
        <Text style={styles.titulo}>Nintendo Switch</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
