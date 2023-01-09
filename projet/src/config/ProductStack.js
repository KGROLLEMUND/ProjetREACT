import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Product from '../screens/Product';
import Details from '../screens/details';

const Stack = createNativeStackNavigator();

const ProductPage = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Product"
          component={Product}
          options={{title: 'Product'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProductPage;
