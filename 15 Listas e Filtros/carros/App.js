import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaCarros from './componentes/ListaCarros';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista de Carros" component={ListaCarros} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
