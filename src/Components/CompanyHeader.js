import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppColors from '../Colors/AppColors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Paddings from '../Enums/Paddings';
import Title from '../Components/Title'
import TitleType from '../Enums/TitleType'
import Icon from 'react-native-vector-icons/MaterialIcons';
export default CompanyHeader = props => {
    return (
        <View style={styles.container}>
            <View style={styles.leftSqure}>
                <Icon name='engineering' size={30} color={AppColors.mainIconColor} />
            </View>
            <View style={styles.textContainer}>
                <Title style={styles.description} type={TitleType.SmallTitle}>We found 5 certified companies in your Selected Location</Title>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.mainButtonColor,
        flexDirection: 'row',
        padding: wp(Paddings.normal),
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftSqure: {
        width: 50,
        height: 50,
        borderRadius: 10,
        borderColor: AppColors.textColor,
        borderWidth: 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : AppColors.buttonDisabledColor
    },
    description: {
        fontWeight: 'normal',
        flexWrap: 'wrap',
        color: AppColors.mainBackground,
        textAlign: 'left',
    },
    textContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
})