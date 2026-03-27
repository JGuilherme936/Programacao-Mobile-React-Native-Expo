import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import FotoJogo from '../assets/jogo.png';

export default function Conteudo() {
    return (
        <ScrollView contentContainerStyle={estilos.container}>
        <Text style={estilos.subtitulo}>Super Smash Bros. Ultimate</Text>

        <Image source={FotoJogo} style={estilos.img} />

        <Text style={estilos.descricao}>
        Personagens icônicos enfrentam-se na luta definitiva que você pode jogar a qualquer hora, em qualquer lugar!
        Derrote seus rivais com novos personagens como Simon Belmont e King K. Rool.
        </Text>
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    subtitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    img: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    descricao: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        lineHeight: 24,
    }
});
