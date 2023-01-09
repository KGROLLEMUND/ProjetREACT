/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from 'axios';
import Avatar from '../../avatar';

//On recupere la props route à laquelle on a passé l'id d'un héro
const Details = ({route}) => {
  const [product, setProduct] = React.useState({});
  useEffect(() => {
    axios({
      method: 'get',
      url: `https://fakestoreapi.com/products/${route.params.id}`,
      params: {
        ts: 1,
      },
    })
      .then(response => {
        console.log('start call API');
        console.log(response.data);
        setProduct(response.data);
        // console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View>ch
      <Text>Details</Text>
      <ScrollView>
        <Text>{product.title}</Text>
        <Avatar imageSource={product.image} />
        <Text>{product.description}</Text>
        <Text>{product.price}</Text>
      </ScrollView>
    </View>
  );
};

export default Details;
