import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import FotoJogo from '../assets/jogo.png';

export default function Conteudo() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Super Smash Bros. Ultimate</Text>

        <Image source={FotoJogo} style={styles.img} />

        <Text style={styles.paragrafo}>
        Personagens icônicos enfrentam-se na luta definitiva que você pode jogar a qualquer hora, em qualquer lugar!
        Derrote seus rivais com novos personagens como Simon Belmont e King K. Rool.
        </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    img: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    paragrafo: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        color: '#444'
    }
});
