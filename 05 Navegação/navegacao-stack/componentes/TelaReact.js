import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import reactImg from '../assets/react.png';
import estilo from './estilo';

export default function TelaReact (props) {
    return (
        <View style={estilo.fundoReact}>
        <View style={estilo.container}>
        <Image source={reactImg} style={estilo.logo}/>
        <Text style={estilo.titulo}>React</Text>
        <Text style={estilo.texto}>
        Veja 2 tecnologias para se tornar um programador fullstack web React.
        </Text>

        <View style={estilo.boxBotoes}>
        <Button title="Front-end" onPress={() => props.navigation.navigate('React')} />
        <Button title="Back-end" onPress={() => props.navigation.navigate('NodeJS')} />
        </View>
        </View>
        </View>
    );
}
