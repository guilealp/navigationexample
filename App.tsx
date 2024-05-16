
import React from 'react';
import Home from './src/screens/Home';
import PesquisaProduto from './src/screens/PesquisarProduto';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './src/screens/Profile';
import EditarProduto from './src/screens/EditarProduto';

const Stack = createStackNavigator();


function App(): React.JSX.Element{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={Home} options={{ headerShown: false}}/>
        <Stack.Screen name='profile' component={Profile} options={{ headerShown: false}}/>
        <Stack.Screen name='pesquisarProduto' component={PesquisaProduto} options={{ headerShown: false}}/>
        <Stack.Screen name='editarProduto' component={EditarProduto} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
