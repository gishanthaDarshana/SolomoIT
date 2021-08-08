import React from 'react'
import {View, StyleSheet } from 'react-native'
import MainView from '../Components/Wrapper'
import Title from '../Components/Title'
import TitleType from '../Enums/TitleType'
import AppColors from '../Colors/AppColors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default Account = props => {
return (
       <View style={styles.parent}>
          <View style={styles.header}></View>
          <View style={styles.bottom}></View>
          <View style={styles.circle}></View>
       </View>
       )
}
const styles = StyleSheet.create({
    parent: {
        flex : 1,
        backgroundColor : 'red'
    },
    header : {
        height : hp('45%'),
        backgroundColor : 'green'
    },
    bottom :{
        backgroundColor : 'yellow',
        flex : 1
        
    },
    circle: {
        borderRadius: 50,
        position: 'absolute',
        top: hp('45%') - wp('20%') / 2,
        right: 10,
        elevation: 10,
        height : wp('20%'),
        width : wp('20%'),
        backgroundColor : 'blue'
    },
})