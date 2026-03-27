import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import TelaInicial from "./componentes/TelaInicial";
import TelaPlanetas from "./componentes/TelaPlanetas";
import TelaGalaxias from "./componentes/TelaGalaxias";
import TelaBuracoNegro from "./componentes/TelaBuracoNegro";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "#cf9556",
            headerStyle: { backgroundColor: "#121212" },
          }}
        >
          <Stack.Screen name="Tela inicial" component={TelaInicial} />
          <Stack.Screen name="Planetas" component={TelaPlanetas} />
          <Stack.Screen name="Galáxias" component={TelaGalaxias} />
          <Stack.Screen name="Buraco Negro" component={TelaBuracoNegro} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
