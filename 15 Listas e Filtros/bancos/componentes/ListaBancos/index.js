import React, { useState } from "react";
import { ScrollView, View, TextInput } from 'react-native';
import { buscaBanco, retornaBancos } from "../../servicos/busca";
import ItemBanco from "../ItemBanco";
import styles from "./styles";

export default function ListaBancos() {
  const [textoBusca, setTextoBusca] = useState("");
  const [listaBancos, setListaBancos] = useState(retornaBancos());

  function handleBusca(termoDigitado) {
    setTextoBusca(termoDigitado);
    const resultadoBusca = buscaBanco(termoDigitado);
    setListaBancos(resultadoBusca);
  }

  return (
    <View style={styles.Container}>
      <TextInput
        style={styles.CampoBusca}
        placeholder="Digite o nome do banco"
        value={textoBusca}
        onChangeText={(termoDigitado) => handleBusca(termoDigitado)}
      />
      <ScrollView>
        {listaBancos.map((banco) => (
          <ItemBanco 
            key={banco.codigo}
            codigo={banco.codigo}
            nome={banco.nome}
          />
        ))}
      </ScrollView>
    </View>
  );
}
