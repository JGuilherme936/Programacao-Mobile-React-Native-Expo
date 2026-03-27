    // Exemplo para Carros/Index.js
    import React from 'react';
    import { Image, ScrollView, Text, View } from 'react-native';
    import estilo from '../../assets/estilos';

    import civic from '../../assets/carros/civic.png';
    import hrv from '../../assets/carros/hr-v.png';
    import cityhatch from '../../assets/carros/new-city-hatchback.png';
    import citysedan from '../../assets/carros/new-city-sedan.png';

    export default function Carros () {
        return (
            <ScrollView style = { estilo.container } >
            <Text style = { estilo.titulo } >Carros</Text>

            <View style={estilo.areaItem}>
            <Image source={civic} style={estilo.imagem}/>
            <View style={estilo.areaInformativa}>
            <Text style={estilo.textoInformativo}>Honda Civic</Text>
            </View>
            </View>
            <View style={estilo.areaItem}>
            <Image source={hrv} style={estilo.imagem}/>
            <View style={estilo.areaInformativa}>
            <Text style={estilo.textoInformativo}>Honda HR-V</Text>
            </View>
            </View>
            <View style={estilo.areaItem}>
            <Image source={cityhatch} style={estilo.imagem}/>
            <View style={estilo.areaInformativa}>
            <Text style={estilo.textoInformativo}>Honda City Hatch</Text>
            </View>
            </View>
            <View style={estilo.areaItem}>
            <Image source={citysedan} style={estilo.imagem}/>
            <View style={estilo.areaInformativa}>
            <Text style={estilo.textoInformativo}>Honda City Sedan</Text>
            </View>
            </View>
            </ScrollView>
        );
    }
