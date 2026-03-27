import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaBancos from './componentes/ListaBancos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista de Bancos" component={ListaBancos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
