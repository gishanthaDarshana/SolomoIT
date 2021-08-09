import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import Title from '../Components/Title'
import TitleType from '../Enums/TitleType'
import { Rating } from 'react-native-ratings';
import AppColors from '../Colors/AppColors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from 'react-native-reanimated';
import Paddings from '../Enums/Paddings';
import Seperator from './Seperator';
import ProgressiveImage from './ImageLoader';
import ThumbView from './ThumbView';

export default CompanyItem = ({ onPress, item, backgroundColor, textColor }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, { backgroundColor: backgroundColor }]}>
            <View style={styles.innerView}>
                <View style={styles.leftSqure}>
                    <ThumbView url = {item.profile_logo} style = {styles.leftSqure}/>
                </View>
                <View style={styles.rightView}>
                    <Text style={{ ...styles.mainTitle, color: textColor }} >{item.name}</Text>
                    <Rating
                        imageSize={hp(2.5)}
                        ratingCount={5}
                        startingValue={item.star_rating}
                        readonly={true}
                        tintColor={backgroundColor}
                        type='custom'
                        ratingColor={AppColors.textColor}
                        style={{ paddingVertical: 2 }}
                    />
                    <Text numberOfLines={2} ellipsizeMode='tail' style={{ ...styles.mainTitle, color: textColor }} >{item.about}</Text>
                </View>


            </View>
            <Seperator />
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
        alignItems: 'center',
        //height : hp('15%')
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
        flexShrink: 1,
        fontSize : wp('4%'),
        color: AppColors.textColor,
    }

})