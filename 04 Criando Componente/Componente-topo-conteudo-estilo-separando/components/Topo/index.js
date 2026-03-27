import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import FotoJogo from '../../assets/jogo.png';
import estilos from './estilos';

export default function Conteudo() {
    return (
        <ScrollView contentContainerStyle={estilos.container}>
        <Text style={estilos.titulo}>Super Smash Bros. Ultimate</Text>
        <Image source={FotoJogo} style={estilos.img} />
        <Text style={estilos.paragrafo}>
        O encontro épico de lutadores que marcou gerações. Jogue onde quiser com o modo portátil!
        </Text>
        </ScrollView>
    );
}
