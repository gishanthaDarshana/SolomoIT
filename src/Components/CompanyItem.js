import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import Title from '../Components/Title'
import TitleType from '../Enums/TitleType'
import { Rating } from 'react-native-ratings';
import AppColors from '../Colors/AppColors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from 'react-native-reanimated';
import Paddings from '../Enums/Paddings';
import Seperator from './Seperator';

export default CompanyItem = ({ onPress, item, backgroundColor, textColor }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, { backgroundColor: backgroundColor }]}>
            <View style={styles.innerView}>
                <View style={styles.leftSqure}>

                </View>
                <View style={styles.rightView}>
                    <Title style={{ ...styles.mainTitle, color: textColor }} type={TitleType.SubTitle}>{item.title}</Title>
                    <Rating
                        imageSize={hp(2.5)}
                        ratingCount={5}
                        startingValue={item.rate}
                        readonly={true}
                        tintColor={backgroundColor}
                        type='custom'
                        ratingColor = {AppColors.textColor}
                        style = {{padding : 2}}
                    />
                    <Title style={{ ...styles.mainTitle, color: textColor }} type={TitleType.SmallTitle}>{item.description}</Title>
                </View>
                

            </View>
            <Seperator/>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: wp(Paddings.small),
    },
    innerView: {
        padding: wp(Paddings.small),
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftSqure: {
        width: wp(Paddings.large),
        height: wp(Paddings.large),
        borderRadius: wp(Paddings.small),
        borderColor: AppColors.textColor,
        borderWidth: 1
    },
    rightView: {
        paddingLeft: wp(Paddings.small),
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
    },
    mainTitle: {
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        textAlign: 'left',
        color: AppColors.textColor,
    }

})