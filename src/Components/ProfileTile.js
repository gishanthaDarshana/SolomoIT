import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import AppColors from '../Colors/AppColors'
import Title from '../Components/Title'
import TitleType from '../Enums/TitleType'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Paddings from '../Enums/Paddings'


export default ProfileTile = props => {
    return (
        <View style={styles.container}>
            <View style={{ width: 30, height: 30, alignItems : 'center',justifyContent : 'center'}}>
                <Icon name={props.iconName} size={25} color={AppColors.textColor} />
            </View>
            <View style={styles.rightView}>
                <Title style={styles.mainTitle} type={TitleType.SmallTitle}>{props.mainTitle}</Title>
                <Title style={styles.subTitle} type={TitleType.SmallTitle}>{props.subTitle}</Title>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: wp(Paddings.small)
    },
    rightView: {
        paddingLeft: wp(Paddings.small),
        flexDirection: 'column'
    },
    mainTitle: {
        fontWeight: 'normal',
        color: AppColors.subTextColor
    },
    subTitle: {
        fontWeight: 'bold',
    },
})