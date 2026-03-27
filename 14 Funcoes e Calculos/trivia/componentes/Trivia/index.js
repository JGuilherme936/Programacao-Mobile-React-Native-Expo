import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import validaResposta from "../../servicos/validaResposta";
import estilos from "./estilos";

export function Trivia() {
  const [respostaUsuario, setRespostaUsuario] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleVerificar() {
    const resultado = validaResposta(respostaUsuario);
    setMensagem(resultado);
  }

  return (
    <View style={estilos.container}>
      <View style={estilos.box}>
        <Text style={estilos.titulo}>Jogo de Trivia</Text>
        <Text style={estilos.pergunta}>Qual é a capital do Brasil?</Text>
        
        <TextInput
          style={estilos.input}
          placeholder="Digite sua resposta"
          value={respostaUsuario}
          onChangeText={setRespostaUsuario}
        />
        
        <Button 
          title="VERIFICAR RESPOSTA" 
          onPress={handleVerificar} 
          color="#003366" 
        />
        
        {mensagem !== "" && (
          <Text style={estilos.resultado}>{mensagem}</Text>
        )}
      </View>
    </View>
  );
}
