/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Characters from '../screens/Characters';

const Stack = createNativeStackNavigator();

const Routes = props => {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Characters" component={Characters} />
          </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
