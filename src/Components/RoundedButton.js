import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppColors from '../Colors/AppColors';
export default RoundedButton = props => {

    return (
        <View style={styles.containerStyle}>
            <TouchableOpacity
                {...props}
                style={[styles.buttonStyle, {
                    backgroundColor: props.disabled ? AppColors.buttonDisabledColor : AppColors.mainButtonColor,
                    borderColor: props.disabled ? AppColors.buttonDisabledColor : AppColors.mainButtonColor,
                }]}>
                <Icon name={props.iconName} size={wp(7)} color={AppColors.mainIconColor} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonStyle: {
        width: wp(15),
        height: wp(15),
        borderWidth: 1,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: wp(20),
    },
    containerStyle: {
        alignItems: 'flex-end', margin: wp(5)
    }
})