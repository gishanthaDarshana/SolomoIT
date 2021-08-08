import React from 'react'
import { useEffect } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MainView from '../Components/Wrapper'
import Title from '../Components/Title'
import TitleType from '../Enums/TitleType'
import AppColors from '../Colors/AppColors'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Paddings from '../Enums/Paddings'
import CompanyHeader from '../Components/CompanyHeader'
import CompanyItem from '../Components/CompanyItem'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadingStateAction } from '../Redux/Actions';
import Loader from '../Components/Loader'
export default CompanyList = props => {

    const [selectedId, setSelectedId] = useState(null);
    const [listData, updateListData] = useState([]);

    const dispatch = useDispatch();
    const isLoading = useSelector(state => {
        console.log('Initial CompanyList State: ', state);
        return state.loginReducer.apiLoaderVisible
    })
    const token = useSelector(state => {
        console.log('TokenState: ', state);
        return state.loginReducer.userToken
    })

    const DATA = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "Company 1",
            rate: 2,
            description: "sdfsf asf aefw fsaef a"
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Company 2",
            rate: 4,
            description: "sdfsf asf aefw fsaef a"
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Company 3",
            rate: 3,
            description: "sdfsf asf aefw fsaef a"
        },
    ]

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? AppColors.mainButtonColor : AppColors.listViewItemColor
        const textColor = item.id === selectedId ? 'white' : 'black'

        return (
            <CompanyItem
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={backgroundColor}
                textColor={textColor}
            />
        );
    }
    useEffect(() => {
        const unsubscribe = props.navigation.addListener('tabPress', (e) => {
            fetchCompanies();
        })

        fetchCompanies();
        return unsubscribe;
    }, [props.navigation]);


    const fetchCompanies = async () => {
        dispatch(loadingStateAction(true))
        try {
            const auth = "Bearer " + token
            const authResponce = await fetch('https://dev-saas-au.i4tradies.com/api/v2/consumer/company/all', {
                method: 'GET',
                headers: {
                    Accept: 'application/json', 'Content-Type': 'application/json', 'Authorization': auth
                },

            })
            dispatch(loadingStateAction(false))
            const authjson = await authResponce.json()
            console.log('Responce Json:', authjson);
            console.log('Status Code :', authResponce.status);

            if (authResponce.status == 200) {
                console.log('Company Responce :', JSON.stringify(authjson))
                updateListData(authjson.result)
            } else {

            }

        } catch (error) {
            dispatch(loadingStateAction(false))
            console.error(error)
        } finally {
            console.log('Company API call Ended');
        }

    }

    return (
        <MainView style={{flex: 1,}}>
            <Loader loading={isLoading}></Loader>
            <Title style={styles.title} type={TitleType.SubTitle}>Now select a Company</Title>
            <CompanyHeader count={listData.length} />
            
                <FlatList
                    data={listData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId} />
            

        </MainView>
    )
}
const styles = StyleSheet.create({
    title: {
        padding: wp(Paddings.small),
        fontWeight: 'bold',
        color: AppColors.textColor
    },

})