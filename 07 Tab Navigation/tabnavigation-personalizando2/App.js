import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

import TelaInicial from "./componentes/TelaInicial";
import TelaGato from "./componentes/TelaGato";
import TelaCachorro from "./componentes/TelaCachorro";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#3b5998", // Cor quando selecionado
            tabBarInactiveTintColor: "#8c52ff", // Cor quando inativo
            tabBarStyle: { backgroundColor: "#fff" },
          }}
        >
          <Tab.Screen
            name="Início"
            component={TelaInicial}
            options={{
              tabBarIcon: ({ color }) => (
                <Entypo name="home" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Gato"
            component={TelaGato}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="cat" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Cachorro"
            component={TelaCachorro}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="dog" size={24} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
