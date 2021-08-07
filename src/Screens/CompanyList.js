import React from 'react'
import { useEffect } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import MainView from '../Components/Wrapper'
import Title from '../Components/Title'
import TitleType from '../Enums/TitleType'
import AppColors from '../Colors/AppColors'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Paddings from '../Enums/Paddings'
import CompanyHeader from '../Components/CompanyHeader'
import CompanyItem from '../Components/CompanyItem'
import { useState } from 'react'
export default CompanyList = props => {

    const [selectedId, setSelectedId] = useState(null);

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
        const backgroundColor = item.id === selectedId ? AppColors.mainButtonColor : AppColors.buttonDisabledColor
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
    /* useEffect(()=>{
        const unsubscribe = props.navigation.addListener('tabPress',(e)=>{
            e.preventDefault();

            props.navigation.navigate('Company',{screen: "Company"});
        })

        return unsubscribe;
    },[props.navigation]); */

    return (
        <MainView>
            <Title style={styles.title} type={TitleType.MediumTitle}>Now select a Company</Title>
            <CompanyHeader />
            <FlatList data = {DATA}
            renderItem = {renderItem}
            keyExtractor = {(item)=> item.id}
            extraData={selectedId}/>
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