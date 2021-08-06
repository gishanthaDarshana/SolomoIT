import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../Screens/Login'


const Stack = createNativeStackNavigator()



export default class Navigator extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Initial">
          <Stack.Screen name="Initial" component={Login} options = {{headerShown : false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
