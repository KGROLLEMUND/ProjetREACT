/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect} from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import Avatar from '../../avatar';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import notifee from '@notifee/react-native';

const Product = () => {
  const [product, setProduct] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const offset = 20;
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://fakestoreapi.com/products/',
      params: {
        ts: 1,
        // apikey: 'fafa6ed947fd5e62d125cd8371086463',
        limit: 20,
        offset: page * offset,
      },
    })
      .then(response => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [page]);

  const navigation = useNavigation(); // deux manières de faire

  // const addToCart = async (id, name, price, image) => {
  //   let productStorage = JSON.parse(AsyncStorage.getItem('cart')); //recupere le panier
  //   if (productStorage) { //verifie si le panier est vide
  //     const verifyProduct = productStorage.find(item => item.id === id); // récupère l'id d'un produit
  //     if (verifyProduct) { //verifie si le produit est déjà dans le panier
  //       // productStorage.push({id, name, price, image});
  //       // AsyncStorage.setItem('cart', JSON.stringify(productStorage));
  //       console.log('déjà au panier');
  //     } else {
  //       productStorage = [];
  //       productStorage.push({id, name, price, image});
  //       AsyncStorage.setItem('cart', JSON.stringify(productStorage));
  //       console.log('ajoute le product au panier');
  //     }
  //   } else {
  //     AsyncStorage.setItem('cart', JSON.stringify([{id, name, price, image}]));
  //     console.log('ajoute le product au panier si le panier est vide');
  //   }
  // };
  const addToCart = async (id, name, price, image) => {
    const cart = await AsyncStorage.getItem('cart');
    if (cart) {
      const cartArray = JSON.parse(cart);
      const product = cartArray.find(item => item.id === id);
      if (product) {
        console.log('déjà au panier');
      } else {
        cartArray.push({id, name, price, image});
        await AsyncStorage.setItem('cart', JSON.stringify(cartArray));
        console.log('ajoute le product au panier');
      }
    } else {
      await AsyncStorage.setItem('cart', JSON.stringify([{id, name, price, image}]));
      console.log('ajoute le product au panier si le panier est vide');
    }
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Details', {id: item.id});
          }}>
          <Avatar imageSource={item.image} />
          <Text>{item.title}</Text>
          <Text>{item.price} €</Text>
          <Button
            title="Ajouter au panier"
            onPress={() => {
              addToCart(item.id, item.name, item.price, item.image);
            }}>
            <Text>Ajouter au panier</Text>
          </Button>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={() => {
          setPage(page + 1);
        }}
        onEndReachedThreshold={0.4}
      />
    </View>
  );
};

export default Product;
