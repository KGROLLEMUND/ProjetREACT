import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect} from 'react';
import {
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Avatar from '../../avatar';

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

  const renderItem = ({item}) => {
    console.log(item);
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {id: item.id});
        }}>
        <Avatar imageSource={item.image} />
        <Text>{item.title}</Text>
        {/* <Button title="acheter" /> */}
      </TouchableOpacity>
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
