import React, { Component, useEffect, useMemo, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../Screens/Login'
import DrawerNavigator from '../Navigator/Drawer'
import { View, StyleSheet } from 'react-native'
import Loader from '../Components/Loader';
import MainView from '../Components/Wrapper';

import { AuthContext } from '../Context/Context';
import {useDispatch, useSelector} from 'react-redux'
import { loginAction, logoutAction , tokenRetriveAction , fetchStateAction} from '../Redux/Actions';
import SessionManager from '../AsyncStorage/SessionManager';

const Stack = createNativeStackNavigator()

export default Navigator = props => {

  const dispatch = useDispatch();
  const initialState = useSelector(state => {
    console.log('State: ',state);
    return state.loginReducer
  })

  const authContext = useMemo(() => ({
    logOut:() => {
      console.log('logging out');
      new SessionManager().removeToken();
      dispatch(logoutAction())
    }
  }));


  useEffect(() => {
    setTimeout(async() => {
      console.log('Printing initial State : ', initialState);
      const token = await new SessionManager().getToken();
      dispatch(tokenRetriveAction(token));
      
    }, 1000);
  },[]);


  if (initialState.isLoading) {
    return (
      <MainView>
        <Loader />
      </MainView>

    );
  } 

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>

        {
          initialState.userToken !== null ? (
            <Stack.Navigator initialRouteName="HomeScreen">
              <Stack.Screen name="HomeScreen" component={DrawerNavigator} options={{ headerShown: false }} />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator initialRouteName="Initial">
              <Stack.Screen name="Initial" component={Login} options={{ headerShown: false }} />
              {/* <Stack.Screen name="HomeScreen" component={DrawerNavigator} options={{ headerShown: false }} /> */}
              {/* <Stack.Screen name="Company" component={CompanyList} options={{ headerShown: true }} /> */}
            </Stack.Navigator>
          )
        }

      </NavigationContainer>
    </AuthContext.Provider>

  );
}
const styles = StyleSheet.create({})