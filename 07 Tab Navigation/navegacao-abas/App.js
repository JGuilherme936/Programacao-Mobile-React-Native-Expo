import React from "react";
// Importando o Provedor de Área Segura
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Importando as ferramentas de Navegação
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importando as nossas 4 telas criadas
import TelaHome from "./Componentes/TelaHome";
import TelaDescricao from "./Componentes/TelaDescricao";
import TelaRotas from "./Componentes/TelaRotas";
import TelaBiblioteca from "./Componentes/TelaBiblioteca";

// Instanciando o Tab Navigator
const Abas = createBottomTabNavigator();

export default function App () {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
    <Abas.Navigator>
    <Abas.Screen name="Home" component={TelaHome} />
    <Abas.Screen name="Telas" component={TelaDescricao} />
    <Abas.Screen name="Rotas" component={TelaRotas} />
    <Abas.Screen name="Biblioteca" component={TelaBiblioteca} />
    </Abas.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
