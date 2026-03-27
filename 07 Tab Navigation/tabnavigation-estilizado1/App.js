import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import TelaInicial from "./componentes/TelaInicial";
import TelaSobre from "./componentes/TelaSobre";
import TelaContato from "./componentes/TelaContato";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={{
            headerShown: false,
            // Configurações exatas do Print 239:
            tabBarStyle: { backgroundColor: "#eab990" },
            tabBarLabelStyle: { fontSize: 18, fontWeight: "bold" },
            tabBarActiveBackgroundColor: "#e07d42",
            tabBarInactiveTintColor: "#f00",
            tabBarActiveTintColor: "#150b13",
            tabBarLabelPosition: "beside-icon",
          }}
        >
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
          <Tabs.Screen
            name="Contato"
            component={TelaContato}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="contacts"
                  color={color}
                  size={24}
                />
              ),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
