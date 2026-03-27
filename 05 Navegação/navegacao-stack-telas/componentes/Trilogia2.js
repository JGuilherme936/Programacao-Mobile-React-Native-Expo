// Trilogia 2 - Luke
import React from 'react';
import { Text, View, Image } from 'react-native';
import estilo from './estilo';

export default function Trilogia2 () {
    return (
        <View style={estilo.container}>
        <Text style={estilo.titulo}>A história de Luke Skywalker</Text>
        <Image source={require('../assets/luke-skywalker.jpg')} style={estilo.foto} />
        <Text style={estilo.texto}>
        Trilogia principal. Episódios IV, V e VI. A principal e mais famosa das três, relata a história de Luke Skywalker, sua ascensão como Jedi e o combate, junto com seus companheiros, contra o império.
        </Text>
        </View>
    );
}
