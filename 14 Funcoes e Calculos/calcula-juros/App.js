import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import JurosSimples from './componentes/JurosSimples';
import JurosCompostos from './componentes/JurosCompostos';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName = route.name === 'Simples' ? 'calculator' : 'chart-line';
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2196F3',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen name="Simples" component={JurosSimples} />
        <Tab.Screen name="Composto" component={JurosCompostos} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
