// Exemplo para Motos/Index.js
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import estilo from '../../assets/estilos';

import pop from '../../assets/motos/POP-110i.png';
import crf from '../../assets/motos/CRF-250F.png';
import titan from '../../assets/motos/CG-titan.png';
import start from '../../assets/motos/CG-start.png';

export default function Motos () {
    return (
        <ScrollView style = { estilo.container } >
        <Text style = { estilo.titulo } >Motos</Text>

        <View style={estilo.areaItem}>
        <Image source={pop} style={estilo.imagem}/>
        <View style={estilo.areaInformativa}>
        <Text style={estilo.textoInformativo}>POP 110i</Text>
        </View>
        </View>
        <View style={estilo.areaItem}>
        <Image source={crf} style={estilo.imagem}/>
        <View style={estilo.areaInformativa}>
        <Text style={estilo.textoInformativo}>CRF 250F</Text>
        </View>
        </View>
        <View style={estilo.areaItem}>
        <Image source={titan} style={estilo.imagem}/>
        <View style={estilo.areaInformativa}>
        <Text style={estilo.textoInformativo}>CG Titan</Text>
        </View>
        </View>
        <View style={estilo.areaItem}>
        <Image source={start} style={estilo.imagem}/>
        <View style={estilo.areaInformativa}>
        <Text style={estilo.textoInformativo}>CG Start</Text>
        </View>
        </View>
        </ScrollView>
    );
}
