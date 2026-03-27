// Trilogia 1 - Darth Vader
import React from 'react';
import { Text, View, Image } from 'react-native';
import estilo from './estilo';

export default function Trilogia1 () {
    return (
        <View style={estilo.container}>
        <Text style={estilo.titulo}>A história do Darth Vader</Text>
        <Image source={require('../assets/darth-vader.jpg')} style={estilo.foto} />
        <Text style={estilo.texto}>
        Trilogia prequela. Episódios I, II e III. Conta a ascensão de Anakin Skywalker e sua transformação no vilão Darth Vader.
        </Text>
        </View>
    );
}
