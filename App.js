import {React} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import TicTacToe from './TicTacToe';
import Monkey from './Monkey';
import Memory from './Memory';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName='TicTacToe' screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Monkey" component={Monkey}/>
      <Stack.Screen name="TicTacToe" component={TicTacToe}/>
      <Stack.Screen name="Memory" component={Memory}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}
