import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import servico_calculaData from "../../servicos/calcula";
import servico_formataData from "../../servicos/formata";
import estilos from "./estilos";

export function CalculadoraDias(){
  const [dias, setDias] = useState("0");
  const [resultado, setResultado] = useState("");

  function handleBotaoCalculate(){
    if(dias){
      const dataFinal = servico_calculaData(dias);
      const dataFormatada = servico_formataData(dataFinal);
      setResultado(dataFormatada.toString());
    }
  }

  return(
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Calcule a data</Text>
      
      <View style={estilos.areaCalculo}>
        <TextInput
          style={estilos.campoDias}
          placeholder="Informe o número de dias"
          value={dias}
          onChangeText={(textoDigitado) => setDias(textoDigitado)}
          keyboardType="numeric"
        />
        <Button title="CALCULAR" onPress={handleBotaoCalculate} color="#2196F3" />
      </View>

      <View style={estilos.areaResultado}>
        <Text style={estilos.textoDias}>Daqui a {dias} dias estaremos em:</Text>
        <Text style={estilos.textoResultado}>{resultado}</Text>
      </View>
    </View>
  );
}
