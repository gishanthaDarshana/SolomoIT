import React from 'react'
import { View, StyleSheet , Text } from 'react-native'
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
                <Icon name='engineering' size={wp('7%%')} color={AppColors.mainIconColor} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.description} >
                    We found <Text style = {{fontWeight : 'bold'}}>{props.count} certified companies</Text> in your Selected Location
                </Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.mainButtonColor,
        flexDirection: 'row',
        padding: wp(Paddings.normal),
        alignItems: 'center',
        alignContent : 'flex-start',
        justifyContent: 'flex-start'
    },
    leftSqure: {
        width: wp(Paddings.large),
        height: wp(Paddings.large),
        borderRadius: 10,
        borderColor: AppColors.textColor,
        borderWidth: 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : AppColors.buttonDisabledColor
    },
    description: {
        fontWeight: 'normal',
        color: AppColors.mainBackground,
        textAlign: 'left',
        flexWrap : 'wrap',
        fontSize : wp('4%')
    },
    textContainer: {
        padding : wp(Paddings.small),
        flex : 1
    }
})