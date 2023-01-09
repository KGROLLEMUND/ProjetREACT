/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import React, {useEffect} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  //fonction pour récuperer un token
  const logMeIn = async () => {
    //Verification des champs
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }

    axios({
      method: 'post',
      url: 'https://login.hikkary.com/users/login',
      data: {
        username: username,
        password: password,
      },
    })
      .then(async response => {
        console.log(response.headers['x-access-token']);
        await AsyncStorage.setItem('token', response.headers['x-access-token']);
        navigation.navigate('Product');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View>
      <Text>Login</Text>
      <View>
        <TextInputContainer>
          <TextInputStyled
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </TextInputContainer>
        <TextInputContainer>
          <TextInputStyled
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
        </TextInputContainer>
        <LoginButton onPress={logMeIn}>
          <Text>Login</Text>
        </LoginButton>
      </View>
    </View>
  );
};

//Utilisation des styled components
const LoginButton = styled.TouchableOpacity`
  background-color: grey;
  padding: 12px;
  border-radius: 4px;
`;

const TextInputContainer = styled.View`
  margin: 10px;
`;

const TextInputStyled = styled.TextInput`
  background-color: grey;
  padding: 12px;
  border-radius: 12px;
  color: white;
`;

export default Login;
