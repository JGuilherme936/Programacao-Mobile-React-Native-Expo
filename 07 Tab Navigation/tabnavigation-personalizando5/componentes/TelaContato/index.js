import React from "react";
import { View, Text, ScrollView } from "react-native";
import { FontAwesome, Entypo, MaterialIcons } from "@expo/vector-icons";
import estilos from "./estilos";

export default function TelaContato() {
  return (
    <ScrollView>
      <View style={estilos.container}>
        <Text style={estilos.titulo}>
          Entre em contato conosco para comprar nossos produtos
        </Text>

        <View style={estilos.contatoLista}>
          <View style={estilos.contatoBox}>
            <FontAwesome name="phone" size={50} color="#400303" />
            <Text style={estilos.contatoTitulo}>Telefone:</Text>
            <Text style={estilos.contatoParagrafo}>+55 21 000000000</Text>
          </View>

          <View style={estilos.contatoBox}>
            <Entypo name="location-pin" size={50} color="#400303" />
            <Text style={estilos.contatoTitulo}>Endereço:</Text>
            <Text style={estilos.contatoParagrafo}>
              Av. 123, 222 - Rio de Janeiro RJ
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
