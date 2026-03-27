// Trilogia 3 - Rey
import React from 'react';
import { Text, View, Image } from 'react-native';
import estilo from './estilo';

export default function Trilogia3 () {
    return (
        <View style={estilo.container}>
        <Text style={estilo.titulo}>O fim da saga.</Text>
        <Image source={require('../assets/rey.jpg')} style={estilo.foto} />
        <Text style={estilo.texto}>
        Trilogia final. Episódios VII, VII e IX. Somehow, Palpatine returned.
        </Text>
        </View>
    );
}
