import React from 'react'
import { View, StyleSheet } from 'react-native'
import Paddings from '../Enums/Paddings'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppColors from '../Colors/AppColors';
export default Avatar = props => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: wp('30%'),
        height: wp('30%'),
        borderRadius: wp('15%'),
        borderColor: AppColors.mainButtonColor,
        backgroundColor: AppColors.mainBackground
    }
})