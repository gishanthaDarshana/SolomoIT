import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class SessionManager extends Component {

    storeToken = async (token) => {
        try {
            await AsyncStorage.setItem('token', token);
        } catch (error) {
            console.log('token ' + ':' + error)
        }
    }

    getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
            return value
        } catch (e) {
            console.log('token can not retrived')
            return null
        }
    }

    removeToken = async () =>{
        try {
            await AsyncStorage.removeItem('token');
        } catch (e) {
            console.log(e)
        }
    }

}