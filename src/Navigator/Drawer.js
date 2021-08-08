import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { 
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem, } from '@react-navigation/drawer';
import HomeTabView from '../Navigator/TabView'
import AppColors from '../Colors/AppColors';
import { AuthContext } from '../Context/Context';


const Drawer = createDrawerNavigator();



function CustomDrawerContent(props) {

    const {logOut} = useContext(AuthContext);

    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Logout" onPress={() => {logOut()}} />
      </DrawerContentScrollView>
    );
  }

export default DrawerNavigator = props => {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={HomeTabView} options={{
                headerTitle: props => <View />,
                headerStyle: styles.homeHeader,
                headerTintColor: AppColors.mainBackground,
            }} />
        </Drawer.Navigator>
    );
}
const styles = StyleSheet.create({
    homeHeader: {
        backgroundColor: AppColors.secondaryBackground,
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
    },
    
})