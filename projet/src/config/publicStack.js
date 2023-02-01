import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import notifee from '@notifee/react-native';
const Stack = createNativeStackNavigator();

const PublicStack = ({navigation}) => {
  const [loading, setLoading] = React.useState(true);

  async function onDisplayNotification() {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    console.log('channel créer');
    await notifee.displayNotification({
      title: 'Login notification',
      body: 'Vous êtes connecté',
      android: {
        channelId,
        smallIcon: 'ic_launcher',
      },
    });
    console.log('notification affiché');
  }
  useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        setLoading(false);
        onDisplayNotification();
        navigation.navigate('Product', {screen: 'Product'});
      } else {
        setLoading(false);
      }
    });
  });

  if (loading) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: 'red',
        headerTitleStyle: {
          fontWeight: 'thin',
          fontFamily: 'red',
          fontSize: 36,
        },
      }}>
      <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
    </Stack.Navigator>
  );
};

export default PublicStack;
