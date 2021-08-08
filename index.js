/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import Navigator from './src/Navigator/Navigator';
import { name as appName } from './app.json';
import { Provider } from 'react-redux'
import configureStore from './src/Redux/Store';
import React from 'react'

const store = configureStore()

const App = () => {
    return <Provider store={store}>
        <Navigator />
    </Provider>
};

AppRegistry.registerComponent(appName, () => App);
