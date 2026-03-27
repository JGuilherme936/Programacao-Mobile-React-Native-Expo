import React from 'react';
import { Text, View, Button, Image, ScrollView } from 'react-native';
import estilo from './estilo';

export default function TelaInicial (props) {
    return (
        <View style={estilo.container}>
        <Image
        source={require('../assets/star-wars-logo.png')}
        style={estilo.logo}
        resizeMode="contain"
        />

        <Text style={estilo.titulo}>Você sabe qual é a ordem cronológica da franquia Star Wars?</Text>

        <Text style={estilo.texto}>
        Os principais filmes da franquia estão divididos em 3 trilogias. Clique nos botões para conferir.
        </Text>

        <View style={estilo.btnArea}>
        <Button color="#444" title="Ver 1ª Trilogia" onPress={() => props.navigation.navigate('Trilogia 1')} />
        </View>
        <View style={estilo.btnArea}>
        <Button color="#444" title="Ver 2ª Trilogia" onPress={() => props.navigation.navigate('Trilogia 2')} />
        </View>
        <View style={estilo.btnArea}>
        <Button color="#444" title="Ver 3ª Trilogia" onPress={() => props.navigation.navigate('Trilogia 3')} />
        </View>
        </View>
    );
}
