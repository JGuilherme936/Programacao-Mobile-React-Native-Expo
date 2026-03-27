import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome } from "@expo/vector-icons";

import TelaInicial from "./componentes/TelaInicial";
import TelaSobre from "./componentes/TelaSobre";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs.Navigator screenOptions={{ tabBarLabelStyle: { fontSize: 20 } }}>
          <Tabs.Screen
            name="Início"
            component={TelaInicial}
            options={{
              tabBarIcon: ({ color }) => (
                <Entypo name="home" color={color} size={24} />
              ),
            }}
          />

          <Tabs.Screen
            name="Sobre"
            component={TelaSobre}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome name="question-circle-o" color={color} size={24} />
              ),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
