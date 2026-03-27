import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import TelaGato from "./componentes/TelaGato";
import TelaCachorro from "./componentes/TelaCachorro";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#4530b2" },
            headerTitleStyle: { color: "#fff", fontWeight: "bold" },
            headerTitleAlign: "center",
          }}
        >
          <Tabs.Screen
            name="Gato"
            component={TelaGato}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="cat" size={24} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="Cachorro"
            component={TelaCachorro}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="dog" size={24} color={color} />
              ),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
