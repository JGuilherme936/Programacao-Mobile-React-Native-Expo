import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";

import TelaContato from "./Componentes/TelaContato";
import TelaHome from "./Componentes/TelaHome";
import TelaSobre from "./Componentes/TelaSobre";

const Abas = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer >
    <Abas.Navigator>
    <Abas.Screen name="Tela inicial" component = { TelaHome } />
    <Abas.Screen name="Contato" component = { TelaContato } />
    <Abas.Screen name="Sobre" component = { TelaSobre } />
    </Abas.Navigator>
    </NavigationContainer>
  );
};
