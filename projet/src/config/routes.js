import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PublicStack from './publicStack';
import NavBar from './navbar';

const Stack = createNativeStackNavigator();

const Routes = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={PublicStack} />
        <Stack.Screen name="Product" component={NavBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
