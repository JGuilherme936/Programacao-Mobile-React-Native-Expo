import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './componentes/TelaInicial';
import Trilogia1 from './componentes/Trilogia1';
import Trilogia2 from './componentes/Trilogia2';
import Trilogia3 from './componentes/Trilogia3';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Tela Inicial" component={TelaInicial} />
    <Stack.Screen name="Trilogia 1" component={Trilogia1} />
    <Stack.Screen name="Trilogia 2" component={Trilogia2} />
    <Stack.Screen name="Trilogia 3" component={Trilogia3} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
