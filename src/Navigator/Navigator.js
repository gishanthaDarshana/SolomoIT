import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../Screens/Login'
import CompanyList from '../Screens/CompanyList';
import DrawerNavigator from '../Navigator/Drawer'
const Stack = createNativeStackNavigator()

export default class Navigator extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Initial">
          <Stack.Screen name="Initial" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="HomeScreen" component={DrawerNavigator} options={{ headerShown: false }} />
          {/* <Stack.Screen name="Company" component={CompanyList} options={{ headerShown: true }} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
