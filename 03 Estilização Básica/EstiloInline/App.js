import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    /* Estilo Inline aplicado diretamente na View */
    <View style={{
      flex: 1,
      backgroundColor: '#f5f5f5', // Camel Case: background color -> backgroundColor
      alignItems: 'center',      // Camel Case: align items -> alignItems
      justifyContent: 'center',
      padding: 20
    }}>

    {/* Estilo Inline aplicado diretamente no Text */}
    <Text style={{
      fontSize: 24,
      fontWeight: 'bold',
      color: '#34495e',
      marginBottom: 10
    }}>
    Estilo Inline
    </Text>

    <Text style={{
      fontSize: 16,
      textAlign: 'center',
      color: '#7f8c8d'
    }}>
    Neste exemplo, as propriedades de estilo são escritas diretamente na tag do componente.
    </Text>

    </View>
  );
}
