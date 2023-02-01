/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
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
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
                <Image
                  source={require('../assets/images/home.png')}
                  style={{
                    resizeMode: 'contain',
                    width: 30,
                    height: 30,
                  }}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    paddingBottom: 15,
                    fontWeight: 'bold',
                  }}>
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Panier"
          component={Panier}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
                <Image
                  source={require('../assets/images/panier.png')}
                  style={{
                    resizeMode: 'contain',
                    width: 25,
                    height: 25,
                  }}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    paddingBottom: 15,
                    fontWeight: 'bold',
                  }}>
                  Panier
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavBar;
