import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import nodeImg from '../assets/node.png';
import estilo from './estilo';

export default function TelaNodeJS (props) {
    return (
        <View style={estilo.fundoNode}>
        <View style={estilo.container}>
        <Image source={nodeImg} style={estilo.logo}/>
        <Text style={estilo.titulo}>NodeJS</Text>
        <Text style={estilo.texto}>
        Veja 2 tecnologias para se tornar um programador fullstack web NodeJS.
        </Text>

        <View style={estilo.boxBotoes}>
        <Button title="Front-end" onPress={() => props.navigation.navigate('React')} />
        <Button title="Back-end" onPress={() => props.navigation.navigate('NodeJS')} />
        </View>
        </View>
        </View>
    );
}
