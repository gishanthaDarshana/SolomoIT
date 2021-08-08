import React, { useContext ,useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import { 
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem, } from '@react-navigation/drawer';
import HomeTabView from '../Navigator/TabView'
import AppColors from '../Colors/AppColors';
import { AuthContext } from '../Context/Context';
import Loader from '../Components/Loader'
import {useDispatch, useSelector} from 'react-redux'
import { loadingStateAction } from '../Redux/Actions';
const Drawer = createDrawerNavigator();



function CustomDrawerContent(props) {

    const {logOut} = useContext(AuthContext);
    const dispatch = useDispatch();
    const isLoading = useSelector(state => {
        console.log('LoaderState: ', state);
        return state.loginReducer.apiLoaderVisible
    })
    const token = useSelector(state => {
        console.log('TokenState: ', state);
        return state.loginReducer.userToken
    })

    useEffect(()=>{
        dispatch(loadingStateAction(false));
    },[]);

    const logoutUser = async() =>{
        dispatch(loadingStateAction(true));
        try {
            const auth = "Bearer " + token
            const authResponce = await fetch('https://dev-saas-au.i4tradies.com/api/v2/logout', {
                method: 'POST',
                headers: {
                    Accept: 'application/json', 'Content-Type': 'application/json','Authorization': auth
                },
            })
            const authjson = await authResponce.json()
            console.log('Responce Json:',authjson);
            console.log('Status Code :',authResponce.status);

            dispatch(loadingStateAction(false));

            if (authResponce.status == 200) {
                logOut()
            } else {
                
            }

        } catch (error) {
            console.error(error)
            dispatch(loadingStateAction(false));
        } finally {
            console.log('Logout API call Ended');
        }
    }


    return (
      <DrawerContentScrollView {...props}>
        <Loader loading = {isLoading}></Loader>  
        <DrawerItemList {...props} />
        <DrawerItem label="Logout" onPress={() => {logoutUser()}} />
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