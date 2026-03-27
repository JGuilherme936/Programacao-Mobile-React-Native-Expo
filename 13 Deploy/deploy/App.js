import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import TelaInicial from "./componentes/TelaInicial";
import TelaTabuada from "./componentes/TelaTabuada";
import TelaResultado from "./componentes/TelaResultado";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Inicial" component={TelaInicial} />
          <Stack.Screen name="Tabuada" component={TelaTabuada} />
          <Stack.Screen name="Resultado" component={TelaResultado} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
