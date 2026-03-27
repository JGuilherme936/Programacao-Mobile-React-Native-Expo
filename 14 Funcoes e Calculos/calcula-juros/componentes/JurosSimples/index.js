import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { calcularSimples } from '../../servicos/calculos';
import estilos from '../../estilos_globais';

export default function JurosSimples() {
  const [capital, setCapital] = useState('');
  const [taxa, setTaxa] = useState('');
  const [tempo, setTempo] = useState('');
  const [resultado, setResultado] = useState('0.00');

  const handleCalcular = () => {
    if (capital && taxa && tempo) {
      setResultado(calcularSimples(capital, taxa, tempo));
    }
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Juros Simples</Text>
      <TextInput style={estilos.input} placeholder="Capital (R$)" keyboardType="numeric" value={capital} onChangeText={setCapital} />
      <TextInput style={estilos.input} placeholder="Taxa Mensal (%)" keyboardType="numeric" value={taxa} onChangeText={setTaxa} />
      <TextInput style={estilos.input} placeholder="Tempo (Meses)" keyboardType="numeric" value={tempo} onChangeText={setTempo} />
      <Button title="CALCULAR" onPress={handleCalcular} color="#0b3948" />
      <View style={estilos.resultadoBox}>
        <Text style={estilos.resultadoTexto}>Montante Final:</Text>
        <Text style={[estilos.resultadoTexto, {color: '#2196F3'}]}>R$ {resultado}</Text>
      </View>
    </View>
  );
}
