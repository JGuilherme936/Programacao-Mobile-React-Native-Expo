// Exemplo para TelaSobre.js
import React from 'react';
import { Button, Text, View } from 'react-native';
import estilo from './styles';

export default function TelaSobre (props) {
    return (
        <View style={estilo.container}>
        <Text style={estilo.titulo}>Sobre</Text>

        <View style={estilo.buttonBox}>
        <Button title="Tela inicial" onPress={ () => { props.navigation.navigate('Tela inicial') } } />
        </View>
        </View>
    );
}
