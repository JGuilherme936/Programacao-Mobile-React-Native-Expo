import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import TelaInicial from "./componentes/TelaInicial";
import TelaConsole from "./componentes/TelaConsole";
import TelaXCloud from "./componentes/TelaXCloud";
import TelaJogos from "./componentes/TelaJogos";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#107c10" },
          }}
        >
          <Stack.Screen
            name="Tela Inicial"
            component={TelaInicial}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Console" component={TelaConsole} />
          <Stack.Screen name="XCloud" component={TelaXCloud} />
          <Stack.Screen name="Jogos" component={TelaJogos} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
