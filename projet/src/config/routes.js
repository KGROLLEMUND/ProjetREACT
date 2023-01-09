/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PublicStack from './publicStack';
import AuthStack from './AuthStack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

const Routes = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={PublicStack} />
        <Stack.Screen name="Product" component={AuthStack} />
      </Stack.Navigator>
      {/* <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Product') {
              iconName = focused ? 'Product' : 'home-outline';
              // } else if (route.name === 'Profil') {
              //   iconName = focused ? 'Profil' : 'profil-outline';
              // } else if (route.name === 'Panier') {
              //   iconName = focused ? 'Panier' : 'panier-outline';
              // } else if (route.name === 'Menu') {
              //   iconName = focused ? 'Menu' : 'menu-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Product" component={AuthStack} />
        <Tab.Screen name="Profil" component={AuthStack} />
        <Tab.Screen name="Panier" component={AuthStack} />
        <Tab.Screen name="Menu" component={AuthStack} /> */}
      {/* </Tab.Navigator> */}
    </NavigationContainer>
  );
};

export default Routes;
