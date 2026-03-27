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
        A maior celebração da história dos videogames. Lute com mais de 70 personagens em cenários incríveis!
        </Text>
        </ScrollView>
    );
}
