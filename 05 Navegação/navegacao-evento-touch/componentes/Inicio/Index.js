import React from 'react';
import { Image, Text, View } from 'react-native';
import estilo from '../../assets/estilos.js';

import carro from '../../assets/carros/civic.png';
import moto from '../../assets/motos/CG-start.png';

export default function Inicio (props) {
    return (
        <View style = { estilo.container } >
        <Text style = { estilo.titulo } >
        Veículos Honda
        </Text>

        <View style={estilo.areaItem} onTouchEnd={() => {props.navigation.navigate('Carros')}}>
        <Image source={carro} style={estilo.imagem} />
        <View style={estilo.areaInformativa}>
        <Text style={estilo.textoInformativo}>Carros</Text>
        </View>
        </View>

        <View style={estilo.areaItem} onTouchEnd={() => {props.navigation.navigate('Motos')}}>
        <Image source={moto} style={estilo.imagem}/>
        <View style={estilo.areaInformativa}>
        <Text style={estilo.textoInformativo}>Motos</Text>
        </View>
        </View>
        </View>
    );
}
