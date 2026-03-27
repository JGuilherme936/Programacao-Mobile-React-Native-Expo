import React from 'react';
import { Text, View, Image } from 'react-native';
import Logo from '../../assets/switch.png';
import estilos from './estilos';

export default function Topo() {
    return (
        <View style={estilos.container}>
        <Image source={Logo} style={estilos.img} />
        <Text style={estilos.titulo}>Nintendo Switch</Text>
        </View>
    );
}
