import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { verificarGanhador } from "../../servicos/logicaJogo";
import estilos from "./estilos";

export function JogoVelha() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(""));
  const [vezDoX, setVezDoX] = useState(true);
  const [ganhador, setGanhador] = useState(null);

  function handleClique(index) {
    if (tabuleiro[index] !== "" || ganhador) return;

    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[index] = vezDoX ? "X" : "O";
    setTabuleiro(novoTabuleiro);

    const resultado = verificarGanhador(novoTabuleiro);
    if (resultado) {
      setGanhador(resultado);
    } else {
      setVezDoX(!vezDoX);
    }
  }

  function reiniciar() {
    setTabuleiro(Array(9).fill(""));
    setVezDoX(true);
    setGanhador(null);
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Jogo da Velha</Text>

      <View style={estilos.tabuleiro}>
        {tabuleiro.map((valor, index) => (
          <TouchableOpacity 
            key={index} 
            style={estilos.celula} 
            activeOpacity={0.7}
            onPress={() => handleClique(index)}
          >
            <Text style={[
              estilos.textoCelula, 
              { color: valor === "X" ? "#ff4d4d" : "#4d94ff" }
            ]}>
              {valor}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={estilos.status}>
        {ganhador 
          ? (ganhador === "Empate" ? "Deu Velha! 👵" : "Ganhador: " + ganhador) 
          : "Vez de: " + (vezDoX ? "X" : "O")}
      </Text>

      <TouchableOpacity style={estilos.botaoReiniciar} onPress={reiniciar}>
        <Text style={estilos.textoBotao}>REINICIAR</Text>
      </TouchableOpacity>
    </View>
  );
}
