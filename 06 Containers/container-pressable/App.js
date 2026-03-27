import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import TelaHome from "./componentes/TelaHome";
import TelaSobre from "./componentes/TelaSobre";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={TelaHome} />
          <Stack.Screen name="Sobre" component={TelaSobre} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
