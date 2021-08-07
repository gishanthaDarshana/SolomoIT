import React from 'react'
import {View, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppColors from '../Colors/AppColors'
import Title from '../Components/Title'
import TitleType from '../Enums/TitleType'
import Paddings from '../Enums/Paddings'


export default TaskTile = props => {
return (
       <View style = {styles.container}>
          <Title style={styles.value} >{props.taskValue}</Title>
          <Title style={styles.name} >{props.taskName}</Title>
       </View>
       )
}
const styles = StyleSheet.create({
    container : {
        padding : 5,
        marginHorizontal : wp(Paddings.small),
        backgroundColor : AppColors.mainButtonColor,
        justifyContent : 'center',
        alignItems : 'center',
        minWidth : wp('25%'),
        flexDirection : 'column'
    },
    value : {
        fontWeight : 'bold',
        color : AppColors.mainBackground,
    },
    name : {
        fontWeight : 'normal',
        color : AppColors.mainBackground,
    }
})