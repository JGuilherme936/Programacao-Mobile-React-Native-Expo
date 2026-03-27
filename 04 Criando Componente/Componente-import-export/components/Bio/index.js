import React from 'react';
import { View, Text, Image } from 'react-native';
import Foto from '../../assets/Foto.png';
import estilos from './estilos';

export default function Bio() {
    return (
        <View style={estilos.container}>
        <Image source={Foto} style={estilos.foto} />
        <Text style={estilos.nome}>Samuel L. Jackson</Text>
        <Text style={estilos.bio}>
        Um dos atores mais prolíficos de Hollywood, conhecido por sua voz marcante
        e presença imponente em filmes de ação, drama e suspense.
        </Text>
        </View>
    );
}
