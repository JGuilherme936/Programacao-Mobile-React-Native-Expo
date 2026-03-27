import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from 'react-native';
import { carros } from "../../dados/carros";
import ItemCarro from "../ItemCarro";
import filtraCarroMarca from "../../servicos/filtro";
import styles from "./styles";

export default function ListaCarros() {
  const [listaCarros, setListaCarros] = useState(carros);

  function handleFiltro(marca) {
    const filtro = filtraCarroMarca(marca);
    setListaCarros(filtro);
  }

  function handleLimparFiltro() {
    setListaCarros(carros);
  }

  return (
    <View style={styles.Container}>
      <View style={styles.Buttons}>
        <Pressable onPress={() => handleFiltro("Fiat")} style={styles.Button}>
          <Text style={styles.TextButton}>Fiat</Text>
        </Pressable>
        <Pressable onPress={() => handleFiltro("GM")} style={styles.Button}>
          <Text style={styles.TextButton}>GM</Text>
        </Pressable>
        <Pressable onPress={() => handleFiltro("Ford")} style={styles.Button}>
          <Text style={styles.TextButton}>Ford</Text>
        </Pressable>
      </View>
      <Pressable onPress={handleLimparFiltro} style={styles.CleanButton}>
        <Text style={styles.TextButton}>Limpar filtro</Text>
      </Pressable>
      <ScrollView>
        {listaCarros.map((carro, index) => (
          <ItemCarro 
            key={index}
            ano={carro.anoFabricacao}
            marca={carro.marca}
            modelo={carro.modelo}
          />
        ))}
      </ScrollView>
    </View>
  );
}
