import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Panier from '../screens/Panier';
import ProductPage from './ProductStack';

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 50,
          },
        }}>
        <Tab.Screen
          name="ProductPage"
          component={ProductPage}
          options={{title: 'Details'}}
        />
        <Tab.Screen
          name="Panier"
          component={Panier}
          options={{title: 'Details'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavBar;
