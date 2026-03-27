import React from 'react';
import { View, Text, Image } from 'react-native';
import estilos from './estilos';

export default function CardFilme(props) {
    return (
        <View style={estilos.card}>
        <Image source={props.imagem} style={estilos.banner} />
        <View style={estilos.info}>
        <Text style={estilos.titulo}>{props.nomeFilme}</Text>
        <Text style={estilos.participacao}>{props.descricao}</Text>
        </View>
        </View>
    );
}
