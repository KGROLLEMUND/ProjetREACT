/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
import {View, Text, TouchableOpacity, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FlatList} from 'react-native';
import Avatar from '../../avatar';
import notifee from '@notifee/react-native';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [Total_price, setTotal_price] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem('cart').then(cart => {
      if (cart) {
        JSON.parse(cart).forEach(item => {
          console.log(item);
          setCart(cart => [...cart, item]);
        });
      }
    });
  }, []);

  const removePanier = async () => {
    await AsyncStorage.removeItem('cart');
    setCart([]);
  };

  const removeItem = async id => {
    const newCart = cart.filter(item => item.id !== id);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  const onDisplayNotification = async () => {
    await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    console.log('channel créer');
    await notifee.displayNotification({
      title: 'Achat valider',
      body: 'Vous venez de payer votre achat d un montant de ' + Total_price + ' €',
      android: {
        channelId: 'default',
        smallIcon: 'ic_launcher', 
      },
    });
    console.log('notification affiché');
    
  };

  useEffect(() => {
    let Total = 0;
    console.log(cart);
    cart.forEach(item => {
      Total += parseFloat(item.price);
    });
    setTotal_price(Total);
  }, [cart]);


  const renderItem = ({item}) => {
    return (
      <View>
        <Avatar imageSource={item.image} />
        <Text>{item.name}</Text>
        <Text>{item.price} €</Text>
        <TouchableOpacity onPress={() => removeItem(item.id)}>
          <Text>supprimer</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <TouchableOpacity onPress={removePanier}>
        <Text>Vider le panier</Text>
      </TouchableOpacity>
      <Button title="payer" onPress={() => onDisplayNotification()}>
        <Text>Payer</Text>
      </Button>
      <Text>Total: {Total_price.toFixed(2)} €</Text>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Cart;
