import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import TelaPerfil from "./componentes/TelaPerfil";
import TelaContato from "./componentes/TelaContato";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: "#fff" },
            tabBarLabelStyle: { fontSize: 16 },
            tabBarLabelPosition: "beside-icon",
            tabBarActiveBackgroundColor: "#013987",
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#013987",
          }}
        >
          <Tabs.Screen
            name="Perfil"
            component={TelaPerfil}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome name="user" color={color} size={24} />
              ),
            }}
          />
          <Tabs.Screen
            name="Contato"
            component={TelaContato}
            options={{
              tabBarIcon: ({ color }) => (
                <AntDesign name="contacts" color={color} size={24} />
              ),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
