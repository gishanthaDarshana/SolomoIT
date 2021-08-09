import React from 'react'
import { Button, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/Home';
import Account from '../Screens/Account';
import CompanyList from '../Screens/CompanyList';
import RatingScreen from '../Screens/RatingScreen';
import TimingView from '../Screens/TimingView';

const Tab = createBottomTabNavigator();

function MyTabBar({ navigation }) {
    return (
      <Button
        title="Go"
        onPress={() => {
          // Navigate using the `navigation` prop that you received
          navigation.navigate('Company');
        }}
      />
    );
  }

export default HomeTabView = props => {
    return (
        <Tab.Navigator
            //tabBar = {props => <MyTabBar {...props}/>}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HomeTab') {
                        iconName = focused
                            ? 'home'
                            : 'home';
                        return <Ionicons name={iconName} size={size} color={color} />;
                    } else if (route.name === 'Account') {
                        iconName = focused ? 'face' : 'face';
                        return <Ionicons name={iconName} size={size} color={color} />;
                    }else if (route.name === 'CompanyList') {
                        iconName = focused ? 'format-list-bulleted' : 'format-list-bulleted';
                    }else if (route.name === 'RatingScreen') {
                        iconName = focused ? 'star-outline' : 'star-outline';
                    }else if (route.name === 'TimingView') {
                        iconName = focused ? 'backup-restore' : 'backup-restore';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarShowLabel : false,
            })} 
            
            >
            <Tab.Screen name="HomeTab" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Account" component={Account} options={{ headerShown: false }}/>
            <Tab.Screen name="CompanyList" component={CompanyList} options={{ headerShown: false }} />
            <Tab.Screen name="RatingScreen" component={RatingScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="TimingView" component={TimingView} options={{ headerShown: false }}/>
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({

})