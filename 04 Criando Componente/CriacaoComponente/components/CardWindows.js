import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Importa a imagem subindo uma pasta (../) para acessar os assets
import LogoWindows from '../assets/logo.png';

// Exportando o componente customizado
export default function CardWindows() {
    return (
        <View style={estilos.card}>
        <Image source={LogoWindows} style={estilos.img} />

        {/* Título com a cor azul característica */}
        <Text style={estilos.titulo}>Sistema Windows</Text>

        {/* Descrição centralizada */}
        <Text style={estilos.descricao}>
        Um sistema operacional de código fechado e interface gráfica desenvolvida pela Microsoft.
        </Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    card: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        elevation: 3, // Dá uma sombra leve (estilo extra pra ficar melhor que o original)
    },
    img: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    titulo: {
        color: '#0078D7', // Azul Windows
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    descricao: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
        lineHeight: 24,
    }
});
